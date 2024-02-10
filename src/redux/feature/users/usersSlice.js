import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: "",
};
// async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    return data.users;
});

// async thunk for add user
export const addUser = createAsyncThunk("users/addUser", async (user) => {
    const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    return data;
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
            })

            .addCase(addUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users.push(action.payload);
                state.isError = false;
                state.error = "";
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.users = [];
            });
    },
});

export default usersSlice.reducer;
