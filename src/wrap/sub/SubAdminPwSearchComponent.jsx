import React from 'react';
import './scss/subAdminPwSearch.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SubAdminPwSearchComponent(){

    const navigate = useNavigate();

    const [state,setState]=React.useState({
        이름:'',
        아이디:'',
        비밀번호:'비밀번호'
    })

    const onchangeName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        })
    }
    const onchangeId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }

    const onSubmitBtn=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('adminName', state.이름);
        formData.append('adminId', state.아이디);

        axios({
            url: 'http://answotlr12.dothome.co.kr/kolisnet/admin_pw_search.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data)
                if(res.data!==''){
                    navigate('/subAdminSearchResult',{
                        state:{
                            이름:res.data.이름,
                            비밀번호:res.data.비밀번호,
                            가입일:res.data.가입일,
                            종류:state.비밀번호
                        }
                    })

                }
                else{
                }
            }
        })
        .catch((err)=>{
            console.log( "AXIOS 실패!" );
            console.log( err );
        });
    }
    return (
        <div id='subAdminPwSearch'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>관리자 비밀번호찾기</h2>
                    </div>
                    <form onSubmit={onSubmitBtn}>
                        <ul>
                            <li>
                                <input type="text" name='adminId' id='adminId' placeholder='아이디를 입력하세요.' value={state.아이디} onChange={onchangeId}/>
                            </li>
                            <li>
                                <input type="text" name='adminName' id='adminName' placeholder='이름을 입력하세요.' value={state.이름} onChange={onchangeName}/>
                            </li>
                        </ul>
                        {/* <div className="footer-text">
                                        <div className="text-box">
                                            <Link to="/subAdminSignUp">관리자 회원가입</Link>
                                            <ul>
                                                <li><Link to="">아이디 찾기</Link></li>
                                                <li><Link to="">비밀번호 찾기</Link></li>
                                            </ul>
                                        </div>
                        </div> */}
                        <button>확인</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
