import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    return data.users;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.users = [];
            });
    },
});

export default usersSlice.reducer;
