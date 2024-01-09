import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import axios from 'axios';

export default function Sub1DataListComponentChild({dataList}){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [state, setState] = React.useState({
        // 자료목록리스트 페이지네이션
        pageList: 4,
        page: 1,
        totalPage: 0,

        // 페이지버튼 페이지네이션
        pageListBtn: 5,
        pageBtn: 1,
        totalPageBtn: 0,
        pageNumBtn: [],

        searchData: '',
        searchSubject: '',
        searchCategory: ''
    });

    const [pageNumber, setPageNumber] = React.useState([]);

    // 페이지네이션
    React.useEffect(()=>{
        if(dataList.length > 0){
            setState({
                ...state,
                totalPage: Math.ceil(dataList.length / state.pageList),
                totalPageBtn: Math.ceil(Math.ceil(dataList.length / state.pageList) /state.pageListBtn)
            });
        }
    },[dataList]);

    // 페이지 번호 배열
    React.useEffect(()=>{
        if(state.totalPage > 0){
            let pageNumber = [];
            for(let i=1; i<=state.totalPage; i++){
                pageNumber = [...pageNumber, i];
                // console.log(pageNumber)
            }
            setPageNumber(pageNumber);
        }
    },[state.totalPage]);

    React.useEffect(()=>{
        const {totalPageBtn, pageListBtn, pageBtn} = state;
        if(totalPageBtn > 0){
            let pageNumBtn = [];
            let firstNum = ((pageBtn - 1) * pageListBtn) + 1;
            let lastNum = (firstNum + state.pageListBtn) -1 >= state.totalPage ? state.totalPage : (firstNum + state.pageListBtn)-1;
            // console.log(firstNum);
            // console.log(lastNum);
            for(let i=firstNum; i<=lastNum; i++){
                pageNumBtn = [...pageNumBtn, i];
                //console.log(firstNum);
            }
            setState({
                ...state,
                pageNumBtn: pageNumBtn
            });
        }
    },[state.totalPageBtn]);

    // 페이지 버튼 클릭 이벤트
    const onClickPageBtn=(e, num)=>{
        e.preventDefault();
        setState({
            ...state,
            page: num
        });
    }

    // 맨앞으로 버튼 클릭이벤트
    const onClickFirstPageBtn=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            page: 1
        });
    }

    // 맨뒤로 버튼 클릭이벤트
    const onClickLastPageBtn=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            page: state.totalPage
        });
    }

    // 앞으로 이동 버튼 클릭이벤트
    const onClickPrevPageBtn=(e)=>{
        e.preventDefault();
        let page = state.page;
        if(page <= 1){
            page = 1;
        }
        else {
            page = page -1;
        }
        setState({
            ...state,
            page: page
        });
    }

    // 뒤로 이동 버튼 클릭 이벤트
    const onClickNextPageBtn=(e)=>{
        e.preventDefault();
        const {pageListBtn, pageBtn} = state;
        let page = state.page;
        if(page >= state.totalPage){
            page = state.totalPage;
        }
        else if(page===5){
            let pageNumBtn = [];
            let firstNum = 5;
            let lastNum = 11;
            for(let i=firstNum; i<=lastNum; i++){
                pageNumBtn = [...pageNumBtn, i];
            }
            setState({
                ...state,
                pageNumBtn: pageNumBtn
            });
        }
        else {
            page = page +1;
        }
        setState({
            ...state,
            page: page
        });
    }

    // 자료 수정하기 클릭이벤트
    const onClickDataUpdate=(e, item)=>{
        e.preventDefault();
        // console.log(item);
        navigate('/dataListUpdate', {state:item});
    }

    const confirmModalMethod=(msg, item)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            회원가입완료: false,
            item: item
        }
        // console.log(item);
        dispatch(confirmModal(obj));

        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onClickDataDelete=(e, item)=>{
        e.preventDefault();
        //console.log(item);
        confirmModalMethod('자료를 삭제하시겠습니까?', item);
    }

    const onChangeSearchCategory=(e)=>{
        setState({
            ...state,
            searchCategory: e.target.value
        });
    }

    const onChangeSearchSubject=(e)=>{
        setState({
            ...state,
            searchSubject: e.target.value
        });
    }

    const onChangeSearchData=(e)=>{
        setState({
            ...state,
            searchData: e.target.value
        });
    }

    return (
        <>
            <div className="list-data">
                {
                    dataList.length > 0 && (
                        dataList.map((item, idx)=>{
                            if(Math.ceil((idx+1)/state.pageList)===state.page){
                                return (
                                    <ul key={idx}>
                                        <li className='col1'><span>{idx+1}</span></li>
                                        <li className='col2'><span>{item.bookType}</span></li>
                                        <li className='col3'><span>{item.bookSubject}</span></li>
                                        <li className='col4'><span>{item.bookTitle}</span></li>
                                        <li className='col5'><span>{item.bookWriter}</span></li>
                                        <li className='col6'><span>{item.bookCopyright}</span></li>
                                        <li className='col7'><span><button onClick={(e)=>onClickDataUpdate(e, item)}><img src="./images/sub/sub1/icon_update.svg" alt="수정" /></button></span></li>
                                        <li className='col8'><span><button onClick={(e)=>onClickDataDelete(e, item.bookCopyright)}><img src="./images/sub/sub1/icon_delete.svg" alt="삭제" /></button></span></li>
                                    </ul>
                                )
                            }
                        })
                    )
                }
            </div>
            <div className="pagination">
                <div className="search-box">
                    <select name="searchCategory" id="searchCategory" value={state.searchCategory} onChange={onChangeSearchCategory}>
                        <option value="자료유형">자료유형</option>
                        <option value="전체">전체</option>
                        <option value="일반도서">일반도서</option>
                        <option value="잡지/학술지">잡지/학술지</option>
                        <option value="학위논문">학위논문</option>
                        <option value="디지털신문">디지털신문</option>
                        <option value="멀티미디어/비도서">멀티미디어/비도서</option>
                    </select>
                    <select name="searchSubject" id="searchSubject" value={state.searchSubject} onChange={onChangeSearchSubject}>
                        <option value="주제">주제</option>
                        <option value="전체">전체</option>
                        <option value="기술과학">기술과학</option>
                        <option value="문학">문학</option>
                        <option value="사회과학">사회과학</option>
                        <option value="순수과학">순수과학</option>
                        <option value="어학">어학</option>
                        <option value="역사">역사</option>
                        <option value="예술">예술</option>
                        <option value="자연과학">자연과학</option>
                        <option value="종교">종교</option>
                        <option value="철학">철학</option>
                        <option value="총류">총류</option>
                        <option value="기타">기타</option>
                    </select>
                    <input type="text" name='searchData' id='searchData' value={state.searchData} onChange={onChangeSearchData}/>
                    <button>검색</button>
                </div>
                <div className="pagination-box">
                    <ul>
                        {
                            state.page > 1 && (
                                <>
                                    <li className='page-btn'><button onClick={onClickFirstPageBtn}><img src="./images/sub/sub1/icon_page_first_arrow.png" alt="맨앞으로" /></button></li>
                                    <li className='page-btn'><button onClick={onClickPrevPageBtn}><img src="./images/sub/sub1/icon_page_prev_arrow.png" alt="이전" /></button></li>
                                </>
                            )
                        }
                        {
                            pageNumber.map((item, idx)=>{
                                //let result = Math.ceil((idx+1)/state.pageListBtn)===state.pageBtn
                                // console.log(result);
                                if(Math.ceil((idx+1)/state.pageListBtn)===state.pageBtn){
                                    // console.log(item); 
                                    return (
                                        <li className={`page-btn${state.page===item?' on':''}`} key={idx} onClick={(e)=>onClickPageBtn(e, item)}><button><span>{item}</span></button></li>
                                    )
                                }
                            })
                        }
                        {
                            state.page < state.totalPage && (
                                <>
                                    <li className='page-btn'><button onClick={onClickNextPageBtn}><img src="./images/sub/sub1/icon_page_next_arrow.png" alt="다음" /></button></li>
                                    <li className='page-btn'><button onClick={onClickLastPageBtn}><img src="./images/sub/sub1/icon_page_last_arrow.png" alt="맨뒤로" /></button></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};
