import { createSlice } from "@reduxjs/toolkit";

const initState = {
    searchData: null
}

const searchDataReducer = createSlice({
    name: 'searchData',
    initialState: initState,
    reducers: {
        searchData: (state, action) => {
            state.searchData = action.payload;
        }
    }
});

export default searchDataReducer.reducer;
export const {searchData} = searchDataReducer.actions;

