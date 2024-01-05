import React from 'react';
import Sub1LeftComponent from './Sub1LeftComponent';
import { useLocation } from 'react-router-dom';

export default function Sub1ProductViewComponent(){

    const location = useLocation();

    const [state, setState] = React.useState({
        isSns: false,
        library: []
    });

    const onClickShowsns=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSns: !state.isSns
        });
    }

    React.useEffect(()=>{
        let library = [];
        library = location.state.bookLibrary.split(',');
        // console.log(library);
        setState({
            ...state,
            library: library
        });
    },[location]);

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
                                                <h2>{location.state.bookTitle}</h2>                                        
                                                <h4>{`${state.library.length}개 도서관 소장`}</h4>
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
                                                <li><a href="!#"><img src="./images/sub/sub1/btn_cart.png" alt="" />바구니담기</a></li>
                                                <li><a href="!#"><img src="./images/sub/sub1/btn_myLib.png" alt="" />내서재담기</a></li>
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
