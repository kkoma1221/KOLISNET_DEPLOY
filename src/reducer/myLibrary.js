import { createSlice } from "@reduxjs/toolkit";

const initState = {
    myLibrary: ''
}

const myLibraryReducer = createSlice({
    name: 'myLibrary',
    initialState: initState,
    reducers: {
        myLibraryMethod: (state, action) =>{
            state.cart = action.payload;
        }
    }
});

export default myLibraryReducer.reducer;
export const { myLibraryMethod } = myLibraryReducer.actions;