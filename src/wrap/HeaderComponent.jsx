import React from "react";
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import './scss/header.scss';
import { useSelector, useDispatch } from "react-redux";
import { searchData } from "../reducer/searchData";
import { searchSort } from "../reducer/searchSort";
import { SignUpModal } from "../reducer/isSignUpModal";
import { SignInModal } from "../reducer/isSignInModal";
import { logInInfo } from "../reducer/userSignIn";

export default  function HeaderComponent(){

    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        searchSort: [],
        sort: ['일반도서', '잡지/학술지', '학위논문', '멀티미디어/비도서', '디지털신문', '다른기관자료'],
        keyword: '',
        searchSelect: 'total'
    })

    const onChangeCategoryChkAll=(e)=>{
        let searchSort = [];

        if(e.target.checked){
            searchSort = state.sort;
        }
        else {
            searchSort = [];
        }
        setState({
            ...state,
            searchSort: searchSort
        });
    }

    React.useEffect(()=>{
        setState({
            ...state,
            searchSort: state.sort
        });
    },[]);

    const onChangeCategoryChk=(e)=>{
        let searchSort = state.searchSort;
        if(e.target.checked===true){
            searchSort = [...state.searchSort, e.target.value];
        }
        else{
            searchSort = searchSort.filter((item)=>item!==e.target.value);
        }

        setState({
            ...state,
            searchSort: searchSort
        });
    }

    const onChangeKeyword=(e)=>{
        setState({
            ...state,
            keyword: e.target.value
        });
    }

    const onChangeSearchSelect=(e)=>{
        setState({
            ...state,
            searchSelect: e.target.value
        });
    }

    const searchFilter=(category, result)=>{
        let res = result.filter((item)=>item.bookType!==category);
        dispatch(searchData(res));
        localStorage.setItem('KOLISNET_SEARCH_DATA', JSON.stringify(res));
    }


    const onSubmitSearch=(e)=>{
        e.preventDefault();
        if(state.keyword===''){
            alert('검색어를 입력하세요.');
        }
        else if(state.searchSelect.length < 1){
            alert('자료유형을 선택해 주시기 바랍니다.')
        }
        else{
            if(state.searchSelect==='title'){
                let bookData = selector.bookData.bookData;
                let result = bookData.filter((item)=>item.bookTitle.includes(state.keyword));
                const obj = {
                    searchData: result,
                    searchWord: state.keyword
                }
                // console.log(result);
                if(!state.searchSort.includes('일반도서')){
                    searchFilter('일반도서', result);
                }
                else if(!state.searchSort.includes('잡지/학술지')){
                    searchFilter('잡지/학술지', result);
                }
                else if(!state.searchSort.includes('학위논문')){
                    searchFilter('학위논문', result);
                }
                else if(!state.searchSort.includes('디지털신문')){
                    searchFilter('디지털신문', result);
                }
                else if(!state.searchSort.includes('멀티미디어/비도서')){
                    searchFilter('멀티미디어/비도서', result);
                }
                else {
                    dispatch(searchData(obj));
                    localStorage.setItem('KOLISNET_SEARCH_DATA', JSON.stringify(result));
                }
                dispatch(searchSort(state.searchSort));
                setTimeout(()=>{
                    navigate('/sub1');
                },100);
            }
            else if(state.searchSelect==='author'){
                let bookData = selector.bookData.bookData;
                let result = bookData.filter((item)=>item.bookWriter.includes(state.keyword));
                // console.log(result);
                const obj = {
                    searchData: result,
                    searchWord: state.keyword
                }
                if(!state.searchSort.includes('일반도서')){
                    searchFilter('일반도서', result);
                }
                else if(!state.searchSort.includes('잡지/학술지')){
                    searchFilter('잡지/학술지', result);
                }
                else if(!state.searchSort.includes('학위논문')){
                    searchFilter('학위논문', result);
                }
                else if(!state.searchSort.includes('디지털신문')){
                    searchFilter('디지털신문', result);
                }
                else if(!state.searchSort.includes('멀티미디어/비도서')){
                    searchFilter('멀티미디어/비도서', result);
                }
                else {
                    dispatch(searchData(obj));
                    localStorage.setItem('KOLISNET_SEARCH_DATA', JSON.stringify(result));
                }
                dispatch(searchSort(state.searchSort));
                setTimeout(()=>{
                    navigate('/sub1');
                },100);
            }
            else if(state.searchSelect==='total'){
                let bookData = selector.bookData.bookData;
                let result = bookData.filter((item)=>item.bookTitle.includes(state.keyword)||item.bookWriter.includes(state.keyword));
                // console.log(result);
                const obj = {
                    searchData: result,
                    searchWord: state.keyword
                }
                if(!state.searchSort.includes('일반도서')){
                    searchFilter('일반도서', result);
                }
                else if(!state.searchSort.includes('잡지/학술지')){
                    searchFilter('잡지/학술지', result);
                }
                else if(!state.searchSort.includes('학위논문')){
                    searchFilter('학위논문', result);
                }
                else if(!state.searchSort.includes('디지털신문')){
                    searchFilter('디지털신문', result);
                }
                else if(!state.searchSort.includes('멀티미디어/비도서')){
                    searchFilter('멀티미디어/비도서', result);
                }
                else {
                    dispatch(searchData(obj));
                    localStorage.setItem('KOLISNET_SEARCH_DATA', JSON.stringify(result));
                }
                dispatch(searchSort(state.searchSort));
                setTimeout(()=>{
                    navigate('/sub1');
                },100);
            }
        }
    }

    const onClickSignUp=(e)=>{
        e.preventDefault();
        dispatch(SignUpModal(true));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }
    const onClickSignIn=(e)=>{
        e.preventDefault();
        dispatch(SignInModal(true));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onClickUserLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem('kolisnet_user_logIn');
        dispatch(logInInfo(null));
    }

    return(
        <>
            <header id="header">
                <div className="container">
                    <div className="title">
                        <div className="gap">
                            <div className="logo-box">
                                <Link to="/index"><img src="./images/header/logo_title_ori.png" alt="" /></Link>
                            </div>
                            <nav className="nav-box">
                                <div className="left">
                                    <ul>
                                        <li><a href="!#">서비스 소개</a></li>
                                        <li><Link to="/subNotice">공지사항</Link></li>
                                        <li><a href="!#">이용안내</a></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    {
                                        selector.adminSignIn.관리자로그인정보 === null && selector.logInInfo.logInInfo === null && (
                                            <ul>
                                                <li><a href="!#" onClick={onClickSignIn}><img src="./images/header/img_login.png" alt="" /><span>로그인</span></a></li>
                                                <li><a href="!#" onClick={onClickSignUp}><img src="./images/header/img_join.png" alt="" /><span>회원가입</span></a></li>
                                                <li><Link to="/cart"><img src="./images/header/img_basket.png" alt="" /><span>바구니</span></Link></li>
                                            </ul>
                                        )
                                    }
                                    {
                                        selector.adminSignIn.관리자로그인정보 !== null && (
                                            <ul>
                                                <li className="noA"><img src="./images/header/img_login.png" alt="" /><span>{`${selector.adminSignIn.관리자로그인정보.이름}  님`}</span></li>
                                                <li><a href="!#" ><span>로그아웃</span></a></li>
                                                <li><a href="!#"><img src="./images/header/img_infochanege.png" alt="" /><span>회원정보수정</span></a></li>
                                                <li><Link to="/cart"><img src="./images/header/img_basket.png" alt="" /><span>바구니</span></Link></li>
                                                {/* <li><Link to="/myLibrary"><img src="./images/header/img_mylibrary.png" alt="" /><span>내서재</span></Link></li> */}
                                                <li><Link to="/registerData"><img src="./images/header/icon_book.svg" alt="" /><span>자료등록</span></Link></li>
                                                <li><Link to="/dataList"><img src="./images/header/img_mylibrary.png" alt="" /><span>자료목록</span></Link></li>
                                            </ul>
                                        )
                                    }
                                    {
                                        selector.logInInfo.logInInfo !== null && (
                                            <ul>
                                                <li className="noA"><img src="./images/header/img_login.png" alt="" /><span>{`${selector.logInInfo.logInInfo.userName}  님`}</span></li>
                                                <li><a href="!#" onClick={onClickUserLogOut}><span>로그아웃</span></a></li>
                                                <li><a href="!#"><img src="./images/header/img_infochanege.png" alt="" /><span>회원정보수정</span></a></li>
                                                <li><Link to="/cart"><img src="./images/header/img_basket.png" alt="" /><span>바구니</span></Link></li>
                                                {/* <li><Link to="/myLibrary"><img src="./images/header/img_mylibrary.png" alt="" /><span>내서재</span></Link></li> */}
                                                <li><Link to="/registerData"><img src="./images/header/icon_book.svg" alt="" /><span>자료등록</span></Link></li>
                                                <li><Link to="/dataList"><img src="./images/header/img_mylibrary.png" alt="" /><span>자료목록</span></Link></li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="content">
                        <div className="gap">
                            <div className="title-box">
                                <h2>전국 도서관 자료</h2>
                                <h3>통합검색 서비스</h3>
                            </div>
                            <form action="" onSubmit={onSubmitSearch}>
                                <div className="search-box">
                                    <div className="input-box">
                                        <div className="search-select">
                                            <select name="searchSelect" id="searchSelect" onChange={onChangeSearchSelect}>
                                                <option value="total">전체</option>
                                                <option value="title">제목</option>
                                                <option value="author">저자</option>
                                            </select>
                                        </div>
                                        <div className="search-input">
                                            <input
                                                type="text"
                                                name="keyword"
                                                id="keyword"
                                                placeholder="검색어를 입력하세요."
                                                onChange={onChangeKeyword}    
                                            />
                                        </div>
                                        <div className="search-button-box">
                                            <button className="auto-complete"></button>
                                            <button className="multi-language">다국어입력</button>
                                            <button type="submit" className="search-btn"><img src="./images/header/btn_search.jpg" alt="찾기" /></button>
                                        </div>
                                    </div>
                                    <div className="button-box">
                                        <button className="detail-search">상세검색</button>
                                        <button className="other-search">다른기관 검색</button>
                                    </div>
                                </div>
                                <div className="category">
                                    <ul>
                                        <li>
                                            <label htmlFor="categoryChkAll">
                                                <input type="checkbox" name="categoryChkAll" id="categoryChkAll" value={'전체'} checked={state.searchSort.length===6} onChange={onChangeCategoryChkAll} />
                                            전체</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk1">
                                                <input type="checkbox" name="categoryChk" id="categoryChk1" value={'일반도서'} checked={state.searchSort.includes('일반도서')} onChange={onChangeCategoryChk}/>
                                            일반도서</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk2">
                                                <input type="checkbox" name="categoryChk" id="categoryChk2" value={'잡지/학술지'} checked={state.searchSort.includes('잡지/학술지')} onChange={onChangeCategoryChk}/>
                                            잡지/학술지</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk3">
                                                <input type="checkbox" name="categoryChk" id="categoryChk3" value={'학위논문'} checked={state.searchSort.includes('학위논문')} onChange={onChangeCategoryChk}/>
                                            학위논문</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk4">
                                                <input type="checkbox" name="categoryChk" id="categoryChk4" value={'멀티미디어/비도서'} checked={state.searchSort.includes('멀티미디어/비도서')} onChange={onChangeCategoryChk}/>
                                            멀티미디어/비도서</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk5">
                                                <input type="checkbox" name="categoryChk" id="categoryChk5" value={'디지털신문'} checked={state.searchSort.includes('디지털신문')} onChange={onChangeCategoryChk}/>
                                            디지털신문</label>
                                        </li>
                                        <li>
                                            <label htmlFor="categoryChk6">
                                                <input type="checkbox" name="categoryChk" id="categoryChk6" value={'다른기관자료'} checked={state.searchSort.includes('다른기관자료')} onChange={onChangeCategoryChk}/>
                                            다른기관자료</label>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}