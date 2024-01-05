import React from 'react';

export default function Sub1MyLibraryComponent(){
    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="left" id='myLibrary'>
                            <div className="sub-menu">
                                <ul>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span className='on'>관심목록</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>관심지역설정</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>이용자 TAGS</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>오류신고목록</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right" id='sub1Cart'>
                            <div className="title">
                                <h2>관심목록</h2>
                                <h3>내서재에 추가한 도서리스트를 볼 수 있습니다.</h3>
                            </div>
                            <div className="cart">
                                <div className="cart-length">
                                    <p>총 게시물 <strong> 0 </strong> 건</p>
                                </div>
                                <form action="">
                                    <div className="cart-content">
                                        <div className="select-box">
                                            <label htmlFor="">
                                                <input type="checkbox" />
                                            </label>
                                            <button><img src="./images/sub/sub1/btn_cart.png" alt="" /><span>선택항목삭제</span></button>
                                        </div>
                                        <ul>
                                            <li className='empty'><p>등록된 자료가 없습니다.</p></li>
                                            <li>
                                                <div className="row1">
                                                    <span className='chk-btn'><input type="checkbox" /></span>
                                                    <span className='book-title'>
                                                        <a href="!#">{`${'location.state.item.bookTitle'}/ ${'location.state.item.bookWriter'}`}</a>
                                                    </span>
                                                </div>
                                                <div className="row2">
                                                    <ul>
                                                        <li><h5>발행사항 : 한국파스퇴르 , 2002</h5></li>
                                                        <li><h5>분류기호 : 900</h5></li>
                                                        <li><h5>소장도서관 : 5개관</h5></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};