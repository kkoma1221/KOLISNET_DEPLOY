import React from 'react';
import './scss/sub1.scss';
import Sub1LeftComponent from './Sub1LeftComponent';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { cartMethod } from '../../reducer/cart';
import { myLibraryMethod } from '../../reducer/myLibrary';
import axios from 'axios';

export default function Sub1ProductDetailComponent(){

    const navigate = useNavigate();
    const location = useLocation();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    //console.log(selector.logInInfo.logInInfo);

    const [state, setState] = React.useState({
        bookCheck: [],
        bookCheckAll:'',
        currentBook: [],
        locationData: []
    });

    const onClickProductView=(e, item)=>{
        e.preventDefault();
        navigate('/productView', {state:item});
        // console.log(item);
    }

    React.useEffect(()=>{
        setState({
            ...state,
            locationData: location.state.bookCopyright
        });
    },[location.state]);

    const onChangeBookCheck=(e)=>{
        let bookCheck = state.bookCheck;
        if(e.target.checked===true){
            bookCheck = [...state.bookCheck, e.target.value];
        }
        else {
            bookCheck = bookCheck.filter((item)=>item!==e.target.value);
        }
        setState({
            ...state,
            bookCheck: bookCheck
        });
    }

    const onChangeBookCheckAll=(e)=>{
        let bookCheck = state.bookCheck;
        if(e.target.checked===true){
            bookCheck = state.locationData;
        }
        else {
            bookCheck = [];
        }
        setState({
            ...state,
            bookCheck: bookCheck
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

    // 데이터베이스 바구니 목록 저장 함수
    const cartDBSave=(item)=>{
        let formData = new FormData();
        formData.append('userId', selector.logInInfo.logInInfo.userId);
        formData.append('cartBookType', item.bookType);
        formData.append('cartBookSubject',item.bookSubject);
        formData.append('cartBookTitle',item.bookTitle);
        formData.append('cartBookWriter',item.bookWriter);
        formData.append('cartBookjuki',item.bookjuki);
        formData.append('cartBookYear',item.bookYear);
        formData.append('cartBookPublisher',item.bookPublisher);
        formData.append('cartBookSortNum',item.bookSortNum);
        formData.append('cartBookCopyright',item.bookCopyright);
        formData.append('cartBookStandardNum',item.bookStandardNum);
        formData.append('cartBookPrice', Number(item.bookPrice));
        formData.append('cartBookPage', Number(item.bookPage));
        formData.append('cartBookLanguage',item.bookLanguage);
        formData.append('cartBookStore',item.bookStore);
        formData.append('cartBookLibrary',JSON.stringify(item.bookLibrary));
        formData.append('cartBookOtherLibrary',item.bookOtherLibrary);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_insert.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                // console.log(item);
                if(res.data!==null){
                    confirmModalMethod('바구니에 저장되었습니다.');
                    cartDBSelect();
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

    // 데이터베이스 바구니 정보 가져오기
    const cartDBSelect=()=>{
        let formData = new FormData();
        formData.append('userId', selector.logInInfo.logInInfo.userId);
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
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onClickGoCart=(e)=>{
        e.preventDefault();
        // navigate('/cart')
        if(state.bookCheck.length < 1){
            confirmModalMethod('자료를 선택하세요.');
        }
        else {
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
                    cartDBSave(currentBook);
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
    }

    const onClickGoMyLibrary=(e)=>{
        e.preventDefault();
        if(state.bookCheck.length < 1){
            confirmModalMethod('자료를 선택하세요.');
        }
        else {
            if(selector.adminSignIn.관리자로그인정보===null){
                confirmModalMethod('로그인이 필요한 메뉴입니다.');
            }
            else if(selector.adminSignIn.관리자로그인정보!==null){
                let currentBook = selector.currentBook.currentBook;
                let library = [];
                navigate('/myLibrary');
                if(localStorage.getItem('KOLISNET_MYLIBRARY')!==null){
                    library = JSON.parse(localStorage.getItem('KOLISNET_MYLIBRARY'));
                }

                let result = library.map((item)=>item.bookCopyright === currentBook.bookCopyright);

                if(result.includes(true)){
                    confirmModalMethod('이미 바구니에 들어있는 자료입니다.');
                }
                else{
                    library = [...library, currentBook];
                    confirmModalMethod('바구니에 저장되었습니다.'); 
                }

                localStorage.setItem('KOLISNET_MYLIBRARY', JSON.stringify(library));
                setState({
                    ...state,
                    currentBook: library
                });
                dispatch(myLibraryMethod(library));
            }
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
                        <div className="right" id='productDetail'>
                            <div className="result-view">
                                <div className="detail-info">
                                    <div className="title">
                                        <div className="text-box">
                                            <div className={`col1${location.state.bookSubject==='사회과학'?' c5696ba':location.state.bookSubject ==='기술과학'?' cc0847b':location.state.bookSubject ==='자연과학'?' cc28000':location.state.bookSubject ==='순수과학'? 'cc28000':location.state.bookSubject==='문학'?' cf45c01':location.state.bookSubject==='어학'?' c00b5b3':location.state.bookSubject==='역사'?' c808080':location.state.bookSubject==='예술'?' c6c9773':location.state.bookSubject==='종교'?' c009dde':location.state.bookSubject==='철학'?' cb073d9':' cea6478'}`}>
                                                <span className={(location.state.bookSubject === '사회과학'||location.state.bookSubject ==='기술과학'||location.state.bookSubject ==='자연과학'||location.state.bookSubject ==='순수과학')?'word4':'word2'}>{location.state.bookSubject}</span>
                                            </div>
                                            <h2>{location.state.bookTitle}</h2>
                                        </div>
                                        <div className="button-box">
                                            <a href="!#"><i></i>검색목록</a>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <ul>
                                            <li><span>표제/저자</span><p>{`${location.state.bookTitle} / ${location.state.bookWriter}`}</p></li>
                                            <li><span>발행사항</span><p>{`${location.state.bookPublisher} , ${location.state.bookYear}`}</p></li>
                                            <li><span>분류기호</span><p>{`한국십진분류법 : ${location.state.bookSortNum}`}</p></li>
                                            <li><span>언어</span><p>{location.state.bookLanguage}</p></li>
                                            <li><span>저작번호</span><p>{location.state.bookCopyright}</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="search-list">
                                    <form action="" className='edition-sort'>
                                        <div className="title">
                                            <h3>특정판찾기</h3>
                                        </div>
                                        <div className="sort">
                                            <select name="" id="">
                                                <option value="판사항">판사항</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="서명">서명</option>
                                                <option value="저자">저자</option>
                                                <option value="발행자">발행자</option>
                                                <option value="발행년">발행년</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="오름차순">오름차순</option>
                                                <option value="내림차순">내림차순</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            <button type='submit'>확인</button>
                                        </div>
                                    </form>
                                    <form action="" className='edition-list-form'>
                                        <div className="edition-list">
                                            <ul>
                                                <li>
                                                    <div className="row1">
                                                        <span className='chk-btn'>
                                                            <input
                                                                type="checkbox"
                                                                name='bookCheck'
                                                                id='bookCheck'
                                                                value={location.state.bookCopyright}
                                                                checked={state.bookCheck.includes(location.state.bookCopyright)}
                                                                onChange={onChangeBookCheck}
                                                            />
                                                        </span>
                                                        <span className='book-title'>
                                                            <a href="!#" onClick={(e)=>onClickProductView(e, location.state)}>{`${location.state.bookTitle}/ ${location.state.bookWriter}`}</a>
                                                        </span>
                                                    </div>
                                                    <div className="row2">
                                                        <ul>
                                                            <li><h5>{`발행사항 : ${location.state.bookPublisher} , ${location.state.bookYear}`}</h5></li>
                                                            <li><h5>{`분류기호 : ${location.state.bookSortNum}`}</h5></li>
                                                            <li><h5>소장도서관 : </h5><a href="!#"> {`${(JSON.parse(location.state.bookLibrary)).length}개관`} <img src="./images/sub/sub1/ico_darr.png" alt="" /></a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                    <div className="go-to-btn-box">
                                        <span className='chk-btn'>
                                            <input
                                                type="checkbox"
                                                name='bookCheckAll'
                                                id='bookCheckAll'
                                                value={'bookCheckAll'}
                                                checked={state.bookCheck.length>1}
                                                onChange={onChangeBookCheckAll}
                                            />
                                        </span>
                                        <a href="!#" onClick={onClickGoCart}><img src="./images/sub/sub1/btn_cart.png" alt="" />바구니담기</a>
                                        <a href="!#" onClick={onClickGoMyLibrary}><img src="./images/sub/sub1/btn_myLib.png" alt="" />내서재담기</a>
                                    </div>
                                    <div className="pagination">
                                        <ul>
                                            <li><span>1</span></li>
                                        </ul>
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
