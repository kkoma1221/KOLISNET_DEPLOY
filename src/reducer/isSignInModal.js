import { createSlice } from "@reduxjs/toolkit";

const initState={
    isSignIn:false
}

const isSignInModal = createSlice({
    name:'setisSignIn',
    initialState:initState,
    reducers:{
        SignInModal:(state, action) => {
            state.isSignIn = action.payload;
        }
    }

})

export default isSignInModal.reducer;
export const {SignInModal} = isSignInModal.actions;