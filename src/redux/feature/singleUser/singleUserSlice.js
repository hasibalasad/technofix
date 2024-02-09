import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchSingleUser = createAsyncThunk(
    "user/fetchSingleUser",
    async (id) => {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const user = await response.json();

        return user;
    }
);

const singleUserSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchSingleUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.users = {};
            });
    },
});

export default singleUserSlice.reducer;
