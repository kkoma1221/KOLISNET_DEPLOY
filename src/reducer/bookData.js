import { createSlice } from "@reduxjs/toolkit";

const initState = {
    bookData : null
}

const bookDataReducer = createSlice({
    name: 'bookData',
    initialState: initState,
    reducers: {
        bookData: (state, action) => {
            state.bookData = action.payload
        }
    }
});

export default bookDataReducer.reducer;
export const { bookData } = bookDataReducer.actions;