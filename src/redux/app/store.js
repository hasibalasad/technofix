import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../feature/users/usersSlice";
import singleUserSlice from "../feature/singleUser/singleUserSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        singleUser: singleUserSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: { warnAfter: 128 },
        }),
});

export default store;
