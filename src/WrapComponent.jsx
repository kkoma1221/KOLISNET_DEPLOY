import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import Sub1Component from "./wrap/sub/Sub1Component.jsx";
import Sub1ProductDetailComponent from "./wrap/sub/Sub1ProductDetailComponent.jsx";
import Sub1ProductViewComponent from "./wrap/sub/Sub1ProductViewComponent.jsx";
import Sub1RegisterDataComponent from "./wrap/sub/Sub1RegisterDataComponent.jsx";
import Sub1CartComponent from "./wrap/sub/Sub1CartComponent.jsx";
import Sub1CartProductViewComponent from "./wrap/sub/Sub1CartProductViewComponent.jsx";
import Sub1MyLibraryComponent from "./wrap/sub/Sub1MyLibraryComponent";
import Sub1MyLibraryProductViewComponent from "./wrap/sub/Sub1MyLibraryProductViewComponent";
import Sub1DataListComponent from "./wrap/sub/Sub1DataListComponent.jsx";
import Sub1DataListUpdateComponent from "./wrap/sub/Sub1DataListUpdateComponent.jsx";
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
import SubUserSIgnUpComponent from "./wrap/SubUserSIgnUpComponent";
import UserSignInComponent from "./wrap/UserSignInComponent";
import PostcodeComponent from "./wrap/PostcodeComponent.jsx";
import { logInInfo } from "./reducer/userSignIn";
import { useSelector, useDispatch } from "react-redux"; 
import { adminSignIn } from "./reducer/adminSignIn";
import { bookData } from "./reducer/bookData";
import { searchData } from "./reducer/searchData";
import { cartMethod } from "./reducer/cart";
import { myLibraryMethod } from "./reducer/myLibrary.js";
import { currentBook } from "./reducer/currentBook.js";
import axios from "axios";


export default function WrapComponent(){
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [cart, setCart] = React.useState([]);
    const [ok, setOk] = React.useState(false);
    const [myLibrary, setMyLibrary] = React.useState([]);
    const [okay, setOkay] = React.useState(false);

    React.useEffect(()=>{
        if(localStorage.getItem('kolisnet_user_logIn')!==null){
            let res = JSON.parse(localStorage.getItem('kolisnet_user_logIn'));
            dispatch(logInInfo(res));
        }
        if(localStorage.getItem('KOLISNET_ADMIN_SIGNIN')!==null) {                        
            const result = JSON.parse(localStorage.getItem('KOLISNET_ADMIN_SIGNIN'));
            dispatch(adminSignIn(result));
        }
    },[]);

    React.useEffect(()=>{
        if(localStorage.getItem('KOLISNET_SEARCH_DATA')!== null){
            const result = JSON.parse(localStorage.getItem('KOLISNET_SEARCH_DATA'));
            dispatch(searchData(result));
            // console.log(result);
            // console.log(selector.searchData.searchData);
        }
    },[]);

    React.useEffect(()=>{
        if(localStorage.getItem('KOLISNET_CART')!==null){
            const result = JSON.parse(localStorage.getItem('KOLISNET_CART'));
            dispatch(cartMethod(result));
        }
        if(localStorage.getItem('KOLISNET_VIEW_BOOK')!==null){
            const result = JSON.parse(localStorage.getItem('KOLISNET_VIEW_BOOK'));
            dispatch(currentBook(result));
        }
        if(localStorage.getItem('KOLISNET_MYLIBRARY')!==null){
            const result = JSON.parse(localStorage.getItem('KOLISNET_MYLIBRARY'));
            dispatch(myLibraryMethod(result));
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
            if(localStorage.getItem('KOLISNET_REGISTER_DATA')!== null){
                const result = JSON.parse(localStorage.getItem('KOLISNET_REGISTER_DATA'));
                dispatch(bookData(result));
            }
        })
        .catch((err)=>{
            console.log(err);
        })

        return;
    },[]);

    React.useEffect(()=>{
        if(selector.logInInfo.logInInfo!==null){        
            cartDBSelect(selector.logInInfo.logInInfo.userId);        
        }
    },[ok, selector.logInInfo]);

    React.useEffect(()=>{
        if(selector.logInInfo.logInInfo!==null){        
            myLibraryDBSelect(selector.logInInfo.logInInfo.userId);        
        }
    },[okay, selector.logInInfo]);

    const cartDBSelect=(아이디)=>{
        let formData = new FormData();
        formData.append('userId', 아이디);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_select.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                if(res.data!==null){
                    localStorage.setItem('KOLISNET_CART', JSON.stringify(res.data));
                    dispatch(cartMethod(res.data));
                    // console.log(res.data);
                }
                else {
                    localStorage.setItem('KOLISNET_CART', JSON.stringify([]));
                    dispatch(cartMethod([]));
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const cartDBSave=(item, idx)=>{
        let formData = new FormData();
        let bookLibrary = JSON.parse(item.bookLibrary);
        formData.append('userId', selector.logInInfo.logInInfo.userId);
        formData.append('bookType', item.bookType);
        formData.append('bookSubject',item.bookSubject);
        formData.append('bookTitle',item.bookTitle);
        formData.append('bookWriter',item.bookWriter);
        formData.append('bookjuki',item.bookjuki);
        formData.append('bookYear',item.bookYear);
        formData.append('bookPublisher',item.bookPublisher);
        formData.append('bookSortNum',item.bookSortNum);
        formData.append('bookCopyright',item.bookCopyright);
        formData.append('bookStandardNum',item.bookStandardNum);
        formData.append('bookPrice', Number(item.bookPrice));
        formData.append('bookPage', Number(item.bookPage));
        formData.append('bookLanguage',item.bookLanguage);
        formData.append('bookStore',item.bookStore);
        formData.append('bookLibrary',JSON.stringify(bookLibrary));
        formData.append('bookOtherLibrary',item.bookOtherLibrary);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_insert.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                // console.log(item);
                // console.log(item.bookLibrary);
                // console.log(JSON.stringify(item.bookLibrary));
            }
        })
        .then(()=>{
            cartDBSelect(selector.logInInfo.logInInfo.userId);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const myLibraryDBSelect=(아이디)=>{
        let formData = new FormData();
        formData.append('userId', 아이디);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_myLibrary_table_select.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                if(res.data!==null){
                    localStorage.setItem('KOLISNET_MYLIBRARY', JSON.stringify(res.data));
                    dispatch(myLibraryMethod(res.data));
                    // console.log(res.data);
                }
                else {
                    localStorage.setItem('KOLISNET_MYLIBRARY', JSON.stringify([]));
                    dispatch(myLibraryMethod([]));
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const myLibraryDBSave=(item, idx)=>{
        let formData = new FormData();
        let bookLibrary = JSON.parse(item.bookLibrary);
        formData.append('userId', selector.logInInfo.logInInfo.userId);
        formData.append('bookType', item.bookType);
        formData.append('bookSubject',item.bookSubject);
        formData.append('bookTitle',item.bookTitle);
        formData.append('bookWriter',item.bookWriter);
        formData.append('bookjuki',item.bookjuki);
        formData.append('bookYear',item.bookYear);
        formData.append('bookPublisher',item.bookPublisher);
        formData.append('bookSortNum',item.bookSortNum);
        formData.append('bookCopyright',item.bookCopyright);
        formData.append('bookStandardNum',item.bookStandardNum);
        formData.append('bookPrice', Number(item.bookPrice));
        formData.append('bookPage', Number(item.bookPage));
        formData.append('bookLanguage',item.bookLanguage);
        formData.append('bookStore',item.bookStore);
        formData.append('bookLibrary',JSON.stringify(bookLibrary));
        formData.append('bookOtherLibrary',item.bookOtherLibrary);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_myLibrary_table_insert.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                // console.log(item);
                // console.log(item.bookLibrary);
                // console.log(JSON.stringify(item.bookLibrary));
            }
        })
        .then(()=>{
            myLibraryDBSelect(selector.logInInfo.logInInfo.userId);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    React.useEffect(()=>{
        // console.log(selector.cart.cart);
        // console.log(selector.logInInfo.logInInfo);
        if(selector.logInInfo.logInInfo!==null){
            setCart(selector.cart.cart);
            setMyLibrary(selector.myLibrary.cart);
            if(localStorage.getItem('SET_DB_CART')!==null){
                setCart([]);
                setOk(true);
            }
            else{
                setCart(selector.cart.cart);
            }
            if(localStorage.getItem('SET_DB_MYLIBRARY')!==null){
                setMyLibrary([]);
                setOkay(true);
            }
            else{
                setMyLibrary(selector.myLibrary.cart);
            }
        }
        return;
    },[selector.logInInfo]);

    React.useEffect(()=>{
        if(selector.logInInfo.logInInfo!==null){
            if(localStorage.getItem('SET_DB_CART')===null){
                if(cart.length > 0){
                    localStorage.setItem('SET_DB_CART', 'ok');
                    cart.map((item, idx)=>{
                        cartDBSave(item, idx);
                    });
                }
            }
        }
        return;
    },[cart]);

    React.useEffect(()=>{
        if(selector.logInInfo.logInInfo!==null){
            if(localStorage.getItem('SET_DB_MYLIBRARY')===null){
                if(myLibrary.length > 0){
                    localStorage.setItem('SET_DB_MYLIBRARY', 'ok');
                    myLibrary.map((item, idx)=>{
                        myLibraryDBSave(item, idx);
                    });
                }
            }
        }
        return;
    },[myLibrary]);

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
                            <Route path="/dataList" element={<Sub1DataListComponent/>} />
                            <Route path="/dataListUpdate" element={<Sub1DataListUpdateComponent/>} />
                            <Route path='/cart' element={<Sub1CartComponent/>} />
                            <Route path='/cartProductView' element={<Sub1CartProductViewComponent/>} />
                            <Route path='/myLibrary' element={<Sub1MyLibraryComponent />} />
                            <Route path='/myLibProductView' element={<Sub1MyLibraryProductViewComponent/>} />                  
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
                {
                    selector.SignUpModal.isSignUp && <SubUserSIgnUpComponent />
                }
                {
                    selector.SignInModal.isSignIn && <UserSignInComponent />
                }
                {
                    selector.isAddress.isAddress && <PostcodeComponent />
                }
                </BrowserRouter>
        </div>
    )
}
