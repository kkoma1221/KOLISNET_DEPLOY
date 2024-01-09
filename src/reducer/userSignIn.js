import { createSlice } from "@reduxjs/toolkit";

const initState={
    logInInfo:null
}

const userSignIn = createSlice({
    name:'setSignIn',
    initialState:initState,
    reducers:{
        logInInfo:(state, action)=>{
            state.logInInfo = action.payload;
        }
    }
})

export default userSignIn.reducer;
export const {logInInfo} = userSignIn.actions;