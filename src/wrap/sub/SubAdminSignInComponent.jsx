import React from 'react';
import './scss/subAdminSignIn.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminSignIn } from '../../reducer/adminSignIn';
import { confirmModal } from '../../reducer/confirmModal';

export default function SubAdminSignInComponent(){

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const selector=useSelector((state)=>state)
    const [state,setState]= React.useState({
        아이디:'',
        비밀번호:''
    })

    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            회원가입완료: false
        }
        dispatch(confirmModal(obj));

        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }


    const onchangeId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }
    const onchangePw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        })
    }

    const onSubmitAdminSigin=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('adminId', state.아이디);
        formData.append('adminPw', state.비밀번호);

        axios({
            url: 'http://answotlr12.dothome.co.kr/kolisnet/admin_signIn.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data!==''){
                    const 관리자로그인정보 = {
                        아이디: res.data.아이디,
                        이름: res.data.이름,
                        휴대폰: res.data.휴대폰
                    }
                    localStorage.setItem('KOLISNET_ADMIN_SIGNIN', JSON.stringify(관리자로그인정보));
                    dispatch(adminSignIn(관리자로그인정보));
                    navigate('/index')
                }
                else{
                    confirmModalMethod('아이디와 비밀번호가 일치하지않습니다.')
                }
            }
        
        })
        .catch((err)=>{
            console.log( "AXIOS 실패!" );
            console.log( err );
        });


    }
    return (
        <div id='subAdminSignIn'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>관리자 로그인</h2>
                    </div>
                    <form onSubmit={onSubmitAdminSigin}>
                        <ul>
                            <li>
                                <input type="text" name='adminId' id='adminId' placeholder='아이디를 입력하세요.' value={state.아이디} onChange={onchangeId}/>
                            </li>
                            <li>
                                <input type="password" name='adminPw' id='adminPw' placeholder='비밀번호를 입력하세요.' value={state.비밀번호} onChange={onchangePw}/>
                            </li>
                        </ul>
                        <div className="footer-text">
                            <div className="text-box">
                                <Link to="/subAdminSignUp">관리자 회원가입</Link>
                                <ul>
                                    <li><Link to="/subAdminIdSearch">아이디 찾기</Link></li>
                                    <li><Link to="/subAdminPwSearch">비밀번호 찾기</Link></li>
                                </ul>
                            </div>
                        </div>
                        <button>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
