import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import SubAdminSignInComponent from "./wrap/sub/SubAdminSignInComponent";
import SubAdminSignUpComponent from "./wrap/sub/SubAdminSignUp1Component";
import SubAdminIdSearchComponent from "./wrap/sub/SubAdminIdSearchComponent";
import SubAdminPwSearchComponent from "./wrap/sub/SubAdminPwSearchComponent";
import SubAdminUserListComponent from "./wrap/sub/SubAdminUserListComponent";
import SubAdminSearchResultComponent from "./wrap/sub/SubAdminSearchResultComponent";
import SubNoticeComponent from "./wrap/sub/SubNoticeComponent";
import SubNoticeWriteComponent from "./wrap/sub/SubNoticeWriteComponent";
import SubNoticeViewComponent from "./wrap/sub/SubNoticeViewComponent";
import SubNoticeUpdateComponent from "./wrap/sub/SubNoticeUpdateComponent";
import ConfirmModalComponent from './wrap/ConfirmModalComponent';
import FooterComponent from './wrap/FooterComponent';
import { useSelector, useDispatch } from "react-redux"; 
import { adminSignIn } from "./reducer/adminSignIn";


export default function WrapComponent(){
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(localStorage.getItem('KOLISNET_ADMIN_SIGNIN')!==null) {                        
            const result = JSON.parse(localStorage.getItem('KOLISNET_ADMIN_SIGNIN'));
            dispatch(adminSignIn(result));
        }
    },[]);


    return (
        <div id="wrap">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<HeaderComponent />}>
                            <Route index element={ <MainComponent /> } />                        
                            <Route path="/index" element={ <MainComponent /> } />                        
                            <Route path="/subAdminSignIn" element={ <SubAdminSignInComponent /> }/>
                            <Route path="/subAdminSignUp" element={ <SubAdminSignUpComponent /> }/>
                            <Route path="/subAdminIdSearch" element={ <SubAdminIdSearchComponent /> }/>
                            <Route path="/subAdminPwSearch" element={ <SubAdminPwSearchComponent /> }/>
                            <Route path="/subAdminSearchResult" element={ <SubAdminSearchResultComponent /> }/>
                            <Route path="/subAdminUserList" element={ <SubAdminUserListComponent /> }/>
                            <Route path="/subNotice" element={ <SubNoticeComponent /> }/>
                            <Route path="/noticeWrite" element={ <SubNoticeWriteComponent /> }/>
                            <Route path="/noticeView" element={ <SubNoticeViewComponent /> }/>
                            <Route path="/subUpdateNotice" element={ <SubNoticeUpdateComponent /> }/>
                        </Route>
                    </Routes>
                    <FooterComponent/>
                {
                    selector.confirmModal.isConfirmModal && <ConfirmModalComponent />
                }
                </BrowserRouter>
        </div>
    )
}
