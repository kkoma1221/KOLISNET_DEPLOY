import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isConfirmModal: false,
    confirmMsg: '',
    회원가입완료: false,
    item: ''
}

const confirmModalReducer = createSlice({
    name: 'confirmModal',
    initialState: initState,
    reducers : {
        confirmModal: (state, action)=>{ 
            // console.log( action );
            state.isConfirmModal = action.payload.isConfirmModal;
            state.confirmMsg = action.payload.confirmMsg;
            state.회원가입완료 = action.payload.회원가입완료;
            state.item = action.payload.item;
        }
    }
});

export default confirmModalReducer.reducer;
export const {confirmModal} = confirmModalReducer.actions;