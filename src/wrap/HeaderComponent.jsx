import React from "react";
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import './scss/header.scss';

export default  function HeaderComponent(){

    return(
        <>
            <header id="header">
                <div className="container">
                    <div className="title">
                        <div className="gap">
                            <div className="logo-box">
                                <a href="!#"><img src="./images/header/logo_title_ori.png" alt="" /></a>
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
                                    <ul>
                                        <li><a href="!#"><img src="./images/header/img_login.png" alt="" /><span>로그인</span></a></li>
                                        <li><a href="!#"><img src="./images/header/img_join.png" alt="" /><span>회원가입</span></a></li>
                                        <li><a href="!#"><img src="./images/header/img_basket.png" alt="" /><span>바구니</span></a></li>
                                    </ul>
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
                            <form action="">
                                <div className="search-box">
                                    <div className="input-box">
                                        <div className="search-select">
                                            <select name="" id="">
                                                <option value="total">전체</option>
                                                <option value="title">제목</option>
                                                <option value="author">저자</option>
                                            </select>
                                        </div>
                                        <div className="search-input">
                                            <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요."/>
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
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />전체</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />일반도서</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />잡지/학술지</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />학위논문</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />멀티미디어/비도서</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />디지털신문</label></li>
                                        <li><label htmlFor=""><input type="checkbox" name="" id="" />다른기관자료</label></li>
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