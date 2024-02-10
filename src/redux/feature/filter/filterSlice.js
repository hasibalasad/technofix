import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    select: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        sortBySearch: (state, action) => {
            state.search = action.payload;
        },
        sortBySelect: (state, action) => {
            state.select = action.payload;
        },
    },
});

export const { sortBySelect, sortBySearch } = filterSlice.actions;
export default filterSlice.reducer;
