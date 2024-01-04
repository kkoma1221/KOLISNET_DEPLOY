import React from "react";
import './scss/footer.scss'
import { useDispatch,useSelector } from "react-redux";


export default  function FooterComponent(){
    const selector = useSelector((state)=>state)

    const onClickAdminLogIn=(e)=>{
        e.preventDefault();
        window.location.pathname = '/subAdminSignIn'
    }
    const onClickAdminLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem('KOLISNET_ADMIN_SIGNIN')
        window.location.pathname = '/index'
    }

    return(
        <footer id="footer">
            <div className="container">
                <div className="content">
                    <div className="logo-box">
                        <ul>
                            <li><a href=""><img src="./images/footer/logo1.png" alt="" /></a></li>
                            <li><a href=""><img src="./images/footer/logo2.png" alt="" /></a></li>
                            <li><a href=""><img src="./images/footer/logo3.png" alt="" /></a></li>
                            <li><a href=""><img src="./images/footer/logo4.png" alt="" /></a></li>
                            <li><a href=""><img src="./images/footer/logo5.png" alt="" /></a></li>
                            <li><a href=""><img src="./images/footer/logo6.png" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <div className="logo1">
                            <img src="./images/footer/bottom1.png" alt="" />
                        </div>
                        <div className="middle">
                            <ul>
                                <li>우편번호 06579 서울시 서초구 반포대로 201(반포동)</li>
                                <li>대표전화 : 02-590-6220 팩스 : 02-590-6335</li>
                                <li>Copyright &copy; National Library of Korea. All rights reserved.</li>
                                <li></li>
                            </ul>
                            <img src="./images/footer/bottom2.jpg" alt="" />
                        </div>
                        <div className="data">
                            <ul>
                                <li><img src="./images/footer/bottom3.jpg" alt="" /><em> 종합목록 구축 현황</em><strong>※ 2023.11 말기준</strong></li>
                                <li><em>서지데이터</em><strong>12,829,262 (건)</strong></li>
                                <li><em>소장데이터</em><strong>84,774,904 (건)</strong></li>
                                <li><em>협력기관</em><strong>2,010 (건)</strong></li>
                                {   selector.adminSignIn.관리자로그인정보===null &&
                                <li onClick={onClickAdminLogIn}>관리자 로그인</li>
                                }
                                {   selector.adminSignIn.관리자로그인정보!==null &&
                                    <li onClick={onClickAdminLogOut}>관리자 로그아웃</li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}