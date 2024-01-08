import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Sub1CartProductViewComponent(){

    const location = useLocation();

    const [state, setState] = React.useState({
        isSns: false
    });

    const onClickGoBack=(e)=>{
        e.preventDefault();
        window.history.go(-1);
    }


    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="left"></div>
                        <div className="right" id='cartProductView'>
                            <div className="sub-title">
                                <h3>바구니</h3>
                                <h4>바구니에 담은 도서리스트를 볼 수 있습니다.</h4>
                            </div>
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
                                        </div>
                                        <div className="row2">
                                            <div className="button-box">
                                                <a href="!#">마크보기</a>
                                                <a href="!#">오류신고</a>
                                                <a href="!#">태그추가</a>
                                            </div>
                                            <div className="go-back-btn">
                                                <a href="!#" onClick={onClickGoBack}><i></i>이전목록</a>
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
                                        </ul>
                                        <div className="button-box">
                                            <ul>
                                                <li><a href="!#">책바다(상호대차) 신청</a></li>
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
