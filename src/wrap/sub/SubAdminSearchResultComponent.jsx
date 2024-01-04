import React from 'react';
import './scss/subAdminSearchResult.scss'
import { useNavigate,useLocation } from 'react-router-dom';

export default function SubAdminSearchResultComponent(){

    const navigate = useNavigate()
    const location = useLocation()
    const [state,setState]=React.useState({
        이름:location.state.이름,
        아이디:location.state.아이디,
        비밀번호:location.state.비밀번호,
        종류:location.state.종류,
        가입일:location.state.가입일,
    })
    console.log(location)


    const onClickAdminSignIn=(e)=>{
        e.preventDefault();
        navigate('/subAdminSignIn')
        
    }
    return (
        <div id='subAdminSearchResult'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                        <img src="./images/sub/adminResult/img_member_default.gif" alt="" />
                        <span>관리자: {state.이름}</span>
                    </div>
                    <div className="admin-info">
                        <p>관리자 {state.이름} 님의 {state.종류}는 {`${state.종류==='아이디' ? state.아이디 : state.비밀번호}`} 입니다</p>
                        <p>관리자 {state.이름} 님의 가입날짜는 {state.가입일} 입니다</p>
                        <button onClick={onClickAdminSignIn}>로그인 하러가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
