import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import Sub1Component from "./wrap/sub/Sub1Component.jsx";
import Sub1ProductDetailComponent from "./wrap/sub/Sub1ProductDetailComponent.jsx";
import Sub1ProductViewComponent from "./wrap/sub/Sub1ProductViewComponent.jsx";
import Sub1RegisterDataComponent from "./wrap/sub/Sub1RegisterDataComponent.jsx";
import Sub1CartComponent from "./wrap/sub/Sub1CartComponent.jsx";
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
import { bookData } from "./reducer/bookData";
import { searchData } from "./reducer/searchData";
import axios from "axios";


export default function WrapComponent(){
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(localStorage.getItem('KOLISNET_ADMIN_SIGNIN')!==null) {                        
            const result = JSON.parse(localStorage.getItem('KOLISNET_ADMIN_SIGNIN'));
            dispatch(adminSignIn(result));
        }
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_register_data_table_select.php',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                if(res.data.length > 0){
                    dispatch(bookData(res.data));
                    localStorage.setItem('KOLISNET_REGISTER_DATA', JSON.stringify(res.data));
                }
            }
        })
        .then(()=>{
            if(localStorage.getItem('KOLISNET_REGISTER_DATA')!==null){
                const result = JSON.parse(localStorage.getItem('KOLISNET_REGISTER_DATA'));
                dispatch(bookData(result));
            }
            if(localStorage.getItem('KOLISNET_SEARCH_DATA')!==null){
                const result = JSON.parse(localStorage.getItem('KOLISNET_SEARCH_DATA'));
                dispatch(searchData(result));
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);


    return (
        <div id="wrap">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<HeaderComponent />}>
                            <Route index element={ <MainComponent /> } />                        
                            <Route path="/index" element={ <MainComponent /> } />
                            <Route path="/sub1" element={ <Sub1Component /> }/>
                            <Route path="/productDetail" element={<Sub1ProductDetailComponent />} />
                            <Route path="/productView" element={<Sub1ProductViewComponent/>} />
                            <Route path="/registerData" element={<Sub1RegisterDataComponent />} />
                            <Route path='/cart' element={<Sub1CartComponent/>} />                      
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
