import { createSlice } from "@reduxjs/toolkit";

const initState = {
    searchData: null,
    serachWord: ''
}

const searchDataReducer = createSlice({
    name: 'searchData',
    initialState: initState,
    reducers: {
        searchData: (state, action) => {
            state.searchData = action.payload.searchData;
            state.serachWord = action.payload.searchWord;
        }
    }
});

export default searchDataReducer.reducer;
export const {searchData} = searchDataReducer.actions;

