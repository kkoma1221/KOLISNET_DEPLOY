import React from 'react';
import './scss/sub1.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sub1LeftComponent from './Sub1LeftComponent.jsx';
import Sub1ComponentChild from './Sub1ComponentChild.jsx';
import { searchData } from '../../reducer/searchData';

export default function Sub1Component() {

    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        일반도서: [],
        잡지학술지: [],
        학위논문: [],
        디지털신문: [],
        멀티미디어비도서: [],
        국회도서관소장자료: [],
        대학도서관종합목록: []
    });

    React.useEffect(()=>{
        let 일반도서 = [];
        let 잡지학술지 = [];
        let 학위논문 = [];
        let 디지털신문 = [];
        let 멀티미디어비도서 = [];
        let 국회도서관소장자료 = [];
        let 대학도서관종합목록 = [];
        if(selector.searchData.searchData !== null){
            일반도서 = selector.searchData.searchData.filter((item)=>item.bookType==='일반도서');
            잡지학술지 = selector.searchData.searchData.filter((item)=>item.bookType==='잡지/학술지');
            학위논문 = selector.searchData.searchData.filter((item)=>item.bookType==='학위논문');
            디지털신문 = selector.searchData.searchData.filter((item)=>item.bookType==='디지털신문');
            멀티미디어비도서 = selector.searchData.searchData.filter((item)=>item.bookType==='멀티미디어/비도서');
            국회도서관소장자료 = selector.searchData.searchData.filter((item)=>item.bookLibrary.includes('국회도서관소장자료'));
            대학도서관종합목록 = selector.searchData.searchData.filter((item)=>item.bookLibrary.includes('대학도서관종합목록'));
            setState({
                ...state,
                일반도서: 일반도서,
                잡지학술지: 잡지학술지,
                학위논문: 학위논문,
                디지털신문:  디지털신문,
                멀티미디어비도서:  멀티미디어비도서,
                국회도서관소장자료: 국회도서관소장자료,
                대학도서관종합목록: 대학도서관종합목록
            });
        }
        else {
            return;
        }
    },[selector.searchData.searchData]);

    return (
        <div id='sub1' className='sub1'>
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
                        <div className="right">
                            <div className="search-result">
                                <div className="filter-box">
                                    <div className="button-box">
                                        <a href="!#">전체해제</a>
                                    </div>
                                    <ul>
                                        <li><a href="!#">2021-2030 <span></span></a></li>
                                        <li><a href="!#">일반도서 <span></span></a></li>
                                    </ul>
                                </div>
                                <div className="result-list-group">
                                    <div className="box left-box">
                                        <Sub1ComponentChild title='일반도서' category={state.일반도서} />
                                        <Sub1ComponentChild title='학위논문' category={state.학위논문} />
                                        <Sub1ComponentChild title='디지털 신문' category={state.디지털신문} />
                                        <Sub1ComponentChild title='국회도서관 소장자료' category={state.국회도서관소장자료} />
                                    </div>
                                    <div className="box right-box">
                                        <Sub1ComponentChild title='잡지/학술지' category={state.잡지학술지} />
                                        <Sub1ComponentChild title='멀티미디어/비도서' category={state.멀티미디어비도서} />
                                        <Sub1ComponentChild title='대학도서관 종합목록' category={state.대학도서관종합목록} />
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
