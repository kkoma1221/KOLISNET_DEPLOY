import { createSlice } from "@reduxjs/toolkit";

const initState={
    isSignUp:false
}

const isSignUpModal = createSlice({
    name:'setisSignUp',
    initialState:initState,
    reducers:{
        SignUpModal:(state, action) => {
            state.isSignUp = action.payload;
        }
    }

})

export default isSignUpModal.reducer;
export const {SignUpModal} = isSignUpModal.actions;