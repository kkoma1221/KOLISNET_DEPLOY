import React from 'react';
import axios from 'axios';
import { SignInModal } from '../reducer/isSignInModal';
import { confirmModal } from '../reducer/confirmModal';
import { logInInfo } from '../reducer/userSignIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './scss/userSignIn.scss';

export default function UserSignInComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        userId:'',
        userPw:''
    })

    const onClickSignModalClose=(e)=>{
        e.preventDefault();
        dispatch(SignInModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            회원가입완료: false
        }
        dispatch(confirmModal(obj));
    }

    const onChangeId = (e)=>{
        let {value} = e.target
        setState({
            ...state,
            userId:value
        });
    }
    const onChangePw = (e)=>{
        let {value} = e.target
        setState({
            ...state,
            userPw:value
        });
    }

    const onSubmitLogIn = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('userId', state.userId);
        formData.append('userPw', state.userPw);
        console.log(formData)
        axios({
            url:'http://guon299.co.kr/kolisnet/user_signIn.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===''){
                    confirmModalMethod('로그인실패');
                }
                else{
                    console.log((res.data));
                    let logIn={
                        userId:res.data.아이디,
                        userName:res.data.이름,
                        userHp:res.data.휴대폰,
                        userAddress:res.data.주소,
                        userEmail:res.data.이메일,
                    }
                    localStorage.setItem('kolisnet_user_logIn', JSON.stringify(logIn));
                    dispatch(logInInfo(logIn));
                    dispatch(SignInModal(false));
                    // navigate('/index')
                    const htmlEl = document.getElementsByTagName('html')[0];
                    htmlEl.classList.remove('on');
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
        <div id='userSignIn'>
            <div className="window-bar">
                <button className='close-btn' onClick={onClickSignModalClose}>X</button>
            </div>
            <div id="container1">
                <div className="headre">
                    <div className="logo">
                        <span></span>
                    </div>
                </div>
                <div className="main">
                    <form onSubmit={onSubmitLogIn} >
                        <div className="section1">
                            <div className="left">
                                <div className="row1">
                                    <h2>로그인</h2>
                                    <input type="radio" id='userType' name='userType' value={'통합회원'} select/>
                                    <label htmlFor="userType" >통합회원</label>
                                </div>
                                <div className="row2">
                                    <input type="text" id='userId' name='userId' value={state.userId} onChange={onChangeId}/>
                                </div>
                                <div className="row3">
                                    <input type="password" id='userPw' name='userPw' value={state.userPw} onChange={onChangePw}/>
                                </div>
                                <div className="row4">
                                    <input type="checkbox" id='idSave' name='idSave' value={'아이디 저장'}/>
                                    <label htmlFor="idSave">아이디 저장</label>
                                </div>
                                <div className="row5">
                                    <button className='logIn'>로그인</button>
                                </div>
                                <div className="row6">
                                    <a href="!#">아이디 찾기</a>
                                    <p>|</p>
                                    <a href="!#">비밀번호 찾기</a>
                                    <p>|</p>
                                    <a href="!#">회원가입</a>
                                </div>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                    </form>
                </div>
                <div className="foodter">
                    <div className="content">
                        <div className="left">
                            <div className="logo">
                                <span></span>
                            </div>
                        </div>
                        <div className="rignt">
                            <h2>회원가입, 아이디/비밀번호 분실 등 관련문의 : 02-590-0708 / 02-590-6258</h2>
                            <h3>서울시 서초구 반포대로 201(반포동) (우)06579 문의전화 02-590-0500 팩스 02-590-0530</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
