import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../feature/users/usersSlice";
import singleUserSlice from "../feature/singleUser/singleUserSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        singleUser: singleUserSlice,
    },
});

export default store;
