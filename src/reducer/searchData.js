import { createSlice } from "@reduxjs/toolkit";

const initState = {
    searchData: null,
    searchWord:''
}

const searchDataReducer = createSlice({
    name: 'searchData',
    initialState: initState,
    reducers: {
        searchData: (state, action) => {
            state.searchData = action.payload;
        },
        searchWord: (state, action) =>{
            state.searchWord = action.payload;
        }
    }
});

export default searchDataReducer.reducer;
export const {searchData, searchWord} = searchDataReducer.actions;

