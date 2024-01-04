import { createSlice } from "@reduxjs/toolkit";

const initState = {
    관리자로그인정보: null
}

const adminSignInReducer = createSlice({
    name:'adminSignIn',
    initialState: initState,
    reducers: {
        adminSignIn: (state, action)=>{
            state.관리자로그인정보 = action.payload
        }
    }
});

export default adminSignInReducer.reducer;
export const {adminSignIn} = adminSignInReducer.actions;