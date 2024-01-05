import React from 'react';
import { useSelector } from 'react-redux';

export default function Sub1LeftComponent(){

    const selector = useSelector((state)=>state);

    const [state, setState] = React.useState({
        일반도서: [],
        잡지학술지: [],
        학위논문: [],
        디지털신문: [],
        멀티미디어비도서: [],
        기술과학: [],
        문학: [],
        사회과학: [],
        순수과학: [],
        어학: [],
        역사: [],
        예술: [],
        자연과학: [],
        종교: [],
        철학: [],
        총류: [],
        기타: [],
        주제별: [],
        전체: 0
    });

    React.useEffect(()=>{
        let 일반도서 = [];
        let 잡지학술지 = [];
        let 학위논문 = [];
        let 디지털신문 = [];
        let 멀티미디어비도서 = [];
        let 기술과학 = [];
        let 문학 = [];
        let 사회과학 = [];
        let 순수과학 = [];
        let 어학 = [];
        let 역사 = [];
        let 예술 = [];
        let 자연과학 = [];
        let 종교 = [];
        let 철학 = [];
        let 총류 = [];
        let 기타 = [];
        let 전체 = 0;
        if(selector.searchData.searchData!==null){
            전체 = selector.searchData.searchData.length;
            일반도서 = selector.searchData.searchData.filter((item)=>item.bookType==='일반도서');
            잡지학술지 = selector.searchData.searchData.filter((item)=>item.bookType==='잡지/학술지');
            학위논문 = selector.searchData.searchData.filter((item)=>item.bookType==='학위논문');
            디지털신문 = selector.searchData.searchData.filter((item)=>item.bookType==='디지털신문');
            멀티미디어비도서 = selector.searchData.searchData.filter((item)=>item.bookType==='멀티미디어/비도서');
            기술과학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='기술과학');
            문학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='문학');
            사회과학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='사회과학');
            순수과학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='순수과학');
            어학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='어학');
            역사 = selector.searchData.searchData.filter((item)=>item.bookSubject==='역사');
            예술 = selector.searchData.searchData.filter((item)=>item.bookSubject==='예술');
            자연과학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='자연과학');
            종교 = selector.searchData.searchData.filter((item)=>item.bookSubject==='종교');
            철학 = selector.searchData.searchData.filter((item)=>item.bookSubject==='철학');
            총류 = selector.searchData.searchData.filter((item)=>item.bookSubject==='총류');
            기타 = selector.searchData.searchData.filter((item)=>item.bookSubject==='기타');
            setState({
                ...state,
                전체: 전체,
                일반도서: 일반도서,
                잡지학술지: 잡지학술지,
                학위논문: 학위논문,
                디지털신문:  디지털신문,
                멀티미디어비도서:  멀티미디어비도서,
                기술과학 : 기술과학,
                문학 : 문학,
                사회과학 : 사회과학,
                순수과학 : 순수과학,
                어학 : 어학,
                역사 : 역사,
                예술 : 예술,
                자연과학 : 자연과학,
                종교 : 종교,
                철학 : 철학,
                총류 : 총류,
                기타 : 기타,
            });
        }
    },[selector.searchData.searchData]);


    return (
        <div className="left">
            <div className="title">
                <h2>검색 결과 제한</h2>
            </div>
            <div className="filter-list">
                <ul>
                    <li>
                        <span><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><strong>자료유형</strong></span>
                        <ul>
                            <li className="filter"><a href="!#">전체 <span>{`(${state.전체})`}</span></a></li>
                            {
                                state.일반도서.length > 0 && (
                                    <li className="filter"><a href="!#">일반도서 <span>{`(${state.일반도서.length})`}</span></a></li>
                                )
                            }
                            {
                                state.잡지학술지.length > 0 && (
                                    <li className="filter"><a href="!#">잡지/학술지 <span>{`(${state.잡지학술지.length})`}</span></a></li>
                                )
                            }
                            {
                                state.학위논문.length > 0 && (
                                    <li className="filter"><a href="!#">학위논문 <span>{`(${state.학위논문.length})`}</span></a></li>
                                )
                            }
                            {
                                state.디지털신문.length > 0 && (
                                    <li className="filter"><a href="!#">디지털신문 <span>{`(${state.디지털신문.length})`}</span></a></li>
                                )
                            }
                            {
                                state.멀티미디어비도서.length > 0 && (
                                    <li className="filter"><a href="!#">멀티미디어/비도서 <span>{`(${state.멀티미디어비도서.length})`}</span></a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li>
                        <span><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><strong>발행시기</strong></span>
                        <ul>
                            <li className="filter"><a href="!#">2021-2030 <span>(7083)</span></a></li>
                            <li className="filter"><a href="!#">2011-2020 <span>(3322)</span></a></li>
                            <li className="filter"><a href="!#">2001-2010 <span>(187)</span></a></li>
                            <li className="filter"><a href="!#">1991-2000 <span>(2380)</span></a></li>
                            <li className="filter"><a href="!#">1981-1990 <span>(1058)</span></a></li>
                            <li className="filter"><a href="!#">1971-1980 <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">발행년불명 <span>(136)</span></a></li>
                        </ul>
                        <button>more</button>
                    </li>
                    <li>
                        <span><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><strong>주제별</strong></span>
                        <ul>
                            {
                                state.기술과학.length > 0 && (
                                    <li className="filter"><a href="!#">기술과학 <span>{`(${state.기술과학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.문학.length > 0 && (
                                    <li className="filter"><a href="!#">문학 <span>{`(${state.문학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.사회과학.length > 0 && (
                                    <li className="filter"><a href="!#">사회과학 <span>{`(${state.사회과학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.순수과학.length > 0 && (
                                    <li className="filter"><a href="!#">순수과학 <span>{`(${state.순수과학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.어학.length > 0 && (
                                    <li className="filter"><a href="!#">어학 <span>{`(${state.어학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.역사.length > 0 && (
                                    <li className="filter"><a href="!#">역사 <span>{`(${state.역사.length})`}</span></a></li>
                                )
                            }
                            {
                                state.예술.length > 0 && (
                                    <li className="filter"><a href="!#">예술 <span>{`(${state.예술.length})`}</span></a></li>
                                )
                            }
                            {
                                state.자연과학.length > 0 && (
                                    <li className="filter"><a href="!#">자연과학 <span>{`(${state.자연과학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.종교.length > 0 && (
                                    <li className="filter"><a href="!#">종교 <span>{`(${state.종교.length})`}</span></a></li>
                                )
                            }
                            {
                                state.철학.length > 0 && (
                                    <li className="filter"><a href="!#">철학 <span>{`(${state.철학.length})`}</span></a></li>
                                )
                            }
                            {
                                state.총류.length > 0 && (
                                    <li className="filter"><a href="!#">총류 <span>{`(${state.총류.length})`}</span></a></li>
                                )
                            }
                            {
                                state.기타.length > 0 && (
                                    <li className="filter"><a href="!#">기타 <span>{`(${state.기타.length})`}</span></a></li>
                                )
                            }
                        </ul>
                        <button>more</button>
                    </li>
                    <li>
                        <span><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><strong>언어</strong></span>
                        <ul>
                            <li className="filter"><a href="!#">Korean <span>(7083)</span></a></li>
                            <li className="filter"><a href="!#">Japanese <span>(3322)</span></a></li>
                            <li className="filter"><a href="!#">Chinese <span>(187)</span></a></li>
                            <li className="filter"><a href="!#">English <span>(2380)</span></a></li>
                            <li className="filter"><a href="!#">Vietnamese <span>(1058)</span></a></li>
                            <li className="filter"><a href="!#">Cambodian <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">Thai <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">Russian <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">French <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">Spanish <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">Italian <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">German <span>(136)</span></a></li>
                            <li className="filter"><a href="!#">언어불명 <span>(136)</span></a></li>
                        </ul>
                        <button>more</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
