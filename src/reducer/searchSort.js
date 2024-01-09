import { createSlice } from "@reduxjs/toolkit";

const initState = {
    searchSort: null
}

const searchSortReducer = createSlice({
    name: 'searchSort',
    initialState: initState,
    reducers: {
        searchSort: (state, action) =>{
            state.searchSort = action.payload
        }
    }
});

export default searchSortReducer.reducer;
export const {searchSort} = searchSortReducer.actions;