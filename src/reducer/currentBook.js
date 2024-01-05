import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentBook: null
}

const currentBookReducer = createSlice({
    name: 'currentBook',
    initialState: initState,
    reducers: {
        currentBook: (state, action) => {
            state.currentBook = action.payload;
        }   
    }
});

export default currentBookReducer.reducer;
export const {currentBook} = currentBookReducer.actions;