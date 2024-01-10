import React from 'react';
import Sub1LeftComponent from './Sub1LeftComponent';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { cartMethod } from '../../reducer/cart';
import { myLibraryMethod } from '../../reducer/myLibrary';
import axios from 'axios';

export default function Sub1ProductViewComponent(){

    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [state, setState] = React.useState({
        isSns: false,
        currentBook: []
    });

    const onClickShowsns=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSns: !state.isSns
        });
    }

    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            회원가입완료: false
        }
        dispatch(confirmModal(obj));

        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const cartDBSave=(item, db)=>{
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
        if(db==='cart'){
            axios({
                url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_insert.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    // console.log(res.data);
                    // console.log(item);
                    console.log(item.bookLibrary);
                    console.log(JSON.stringify(item.bookLibrary));
                    if(res.data!==null){
                        confirmModalMethod('바구니에 저장되었습니다.');
                        cartDBSelect(db);
    
                    }
                    else if(res.data===null){
                        confirmModalMethod('바구니에 저장 실패하였습니다.');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(db==='myLibrary'){
            axios({
                url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_myLibrary_table_insert.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data!==null){
                        confirmModalMethod('내 서재에 저장되었습니다.');
                        cartDBSelect(db);
    
                    }
                    else if(res.data===null){
                        confirmModalMethod('내 서재에 저장 실패하였습니다.');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    const cartDBSelect=(db)=>{
        let formData = new FormData();
        formData.append('userId', selector.logInInfo.logInInfo.userId);
        if(db==='cart'){
            axios({
                url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_select.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    //console.log(res.data);
                    if(res.data!==null){
                        localStorage.setItem('KOLISNET_CART', JSON.stringify(res.data));
                        dispatch(cartMethod(res.data));
                        // console.log(res.data);
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(db==='myLibrary'){
            axios({
                url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_myLibrary_table_select.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    //console.log(res.data);
                    if(res.data!==null){
                        localStorage.setItem('KOLISNET_MYLIBRARY', JSON.stringify(res.data));
                        dispatch(myLibraryMethod(res.data));
                        // console.log(res.data);
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    }

    const onClickGoCart=(e)=>{
        e.preventDefault();
        // navigate('/cart')
        let currentBook = selector.currentBook.currentBook;
        let cart = [];

        if(localStorage.getItem('KOLISNET_CART')!==null){
            cart = JSON.parse(localStorage.getItem('KOLISNET_CART'));
        }

        let result = cart.map((item)=>item.bookCopyright === currentBook.bookCopyright);

        if(result.includes(true)){
            confirmModalMethod('이미 바구니에 들어있는 자료입니다.');
        }
        else{
            cart = [...cart, currentBook];
            confirmModalMethod('바구니에 저장되었습니다.'); 
            if(selector.logInInfo.logInInfo!==null){
                cartDBSave(currentBook, 'cart');
            }
        }

        localStorage.setItem('KOLISNET_CART', JSON.stringify(cart));
        setState({
            ...state,
            currentBook: cart
        });
        dispatch(cartMethod(cart));

        // console.log(currentBook.bookCopyright);
        // console.log(result);
        // console.log(cart);
    }

    const onClickGoMyLibrary=(e)=>{
        e.preventDefault();
        if(selector.logInInfo.logInInfo===null){
            confirmModalMethod('로그인이 필요한 메뉴입니다.');
        }
        else if(selector.logInInfo.logInInfo!==null){
            let currentBook = selector.currentBook.currentBook;
            let library = [];
            // navigate('/myLibrary');
            if(localStorage.getItem('KOLISNET_MYLIBRARY')!==null){
                library = JSON.parse(localStorage.getItem('KOLISNET_MYLIBRARY'));
            }

            let result = library.map((item)=>item.bookCopyright === currentBook.bookCopyright);

            if(result.includes(true)){
                confirmModalMethod('이미 내 서재에 들어있는 자료입니다.');
            }
            else{
                library = [...library, currentBook];
                confirmModalMethod('내 서재에 저장되었습니다.'); 
                cartDBSave(currentBook, 'myLibrary');
            }

            localStorage.setItem('KOLISNET_MYLIBRARY', JSON.stringify(library));
            setState({
                ...state,
                currentBook: library
            });
            
            dispatch(myLibraryMethod(library));
        }
    }

    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="search-bar">
                        <div className="tab-menu">
                            <ul>
                                <li><a href="!#" className='on'>전체</a></li>
                                <li><a href="!#">일반도서</a></li>
                                <li><a href="!#">잡지/학술지</a></li>
                                <li><a href="!#">학위논문</a></li>
                                <li><a href="!#">멀티미디어/비도서</a></li>
                                <li><a href="!#">디지털신문</a></li>
                                <li><a href="!#">다른기관자료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Sub1LeftComponent />
                        <div className="right" id='productView'>
                            <div className="result-view">
                                <div className="detail-info">
                                    <div className="title">
                                        <div className="row1">
                                            <div className="text-box">
                                                <div className={`col1${location.state.bookSubject==='사회과학'?' c5696ba':location.state.bookSubject ==='기술과학'?' cc0847b':location.state.bookSubject ==='자연과학'?' cc28000':location.state.bookSubject ==='순수과학'? 'cc28000':location.state.bookSubject==='문학'?' cf45c01':location.state.bookSubject==='어학'?' c00b5b3':location.state.bookSubject==='역사'?' c808080':location.state.bookSubject==='예술'?' c6c9773':location.state.bookSubject==='종교'?' c009dde':location.state.bookSubject==='철학'?' cb073d9':' cea6478'}`}>
                                                    <span className={(location.state.bookSubject === '사회과학'||location.state.bookSubject ==='기술과학'||location.state.bookSubject ==='자연과학'||location.state.bookSubject ==='순수과학')?'word4':'word2'}>{location.state.bookSubject}</span>
                                                </div>
                                                <h2>{location.state.bookTitle}<h4>{`${JSON.parse(location.state.bookLibrary).length}개 도서관 소장`}</h4></h2>                                        

                                            </div>
                                            <div className="image-box">
                                                <a href="!#" onClick={onClickShowsns}><span></span></a>
                                                <div className={`sns${state.isSns?' on':''}`}>
                                                    <a href="!#"><span><img src="./images/sub/sub1/icon_facebook.png" alt="페이스북" /></span></a>
                                                    <a href="!#"><span><img src="./images/sub/sub1/icon_band.png" alt="밴드" /></span></a>
                                                    <a href="!#"><span><img src="./images/sub/sub1/icon_kakaotalk.png" alt="카카오톡" /></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row2">
                                            <div className="button-box">
                                                <a href="!#">마크보기</a>
                                                <a href="!#">오류신고</a>
                                                <a href="!#">태그추가</a>
                                            </div>
                                            <div className="go-back-btn">
                                                <a href="!#"><i></i>이전목록</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="info-box">
                                        <ul>
                                            <li><span>표제/저자</span><p>{`${location.state.bookTitle}/ ${location.state.bookWriter}`}</p></li>
                                            <li><span>발행사항</span><p>{`${location.state.bookPublisher} , ${location.state.bookYear}`}</p></li>
                                            <li><span>형태사항</span><p>{`${location.state.bookPage} p`}</p></li>
                                            <li><span>주기사항</span><p>{location.state.bookjuki}</p></li>
                                            <li><span>표준번호</span><p>{location.state.bookStandardNum}: \ {location.state.bookPrice}</p></li>
                                            <li><span>분류기호</span><p>한국십진분류법- &gt; {location.state.bookSortNum}</p></li>
                                            <li><span>가격</span><p>\{location.state.bookPrice}</p></li>
                                        </ul>
                                    </div>
                                    <div className="page">
                                        <ul className='pagination'>
                                            <li><a href="!#"><img src="./images/sub/sub1/prev.png" alt="이전" /> 이전</a></li>
                                            <li><a href="!#">다음 <img src="./images/sub/sub1/next.png" alt="다음" /></a></li>
                                            <li><p><em>1</em>/1</p></li>
                                        </ul>
                                        <div className="button-box">
                                            <ul>
                                                <li><a href="!#">책바다(상호대차) 신청</a></li>
                                                <li><a href="!#" onClick={onClickGoCart}><img src="./images/sub/sub1/btn_cart.png" alt="" />바구니담기</a></li>
                                                <li><a href="!#" onClick={onClickGoMyLibrary}><img src="./images/sub/sub1/btn_myLib.png" alt="" />내서재담기</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
