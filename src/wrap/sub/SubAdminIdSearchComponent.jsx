import React from 'react';
import './scss/subAdminIdSearch.scss'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

export default function SubAdminIdSearchComponent(){

    const navigate=useNavigate()

    const [state,setState]=React.useState({
        이름:'',
        비밀번호:'',
        아이디:'아이디'
    })

    const onchangeName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        })
    }
    const onchangePw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        })
    }

    const onSubmitBtn=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('adminName', state.이름);
        formData.append('adminPw', state.비밀번호);

        axios({
            url: 'http://answotlr12.dothome.co.kr/kolisnet/admin_id_search.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data!==''){
                    navigate('/subAdminSearchResult',{
                        state:{
                            이름:res.data.이름,
                            아이디:res.data.아이디,
                            가입일:res.data.가입일,
                            종류:state.아이디
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
        <div id='subAdminIdSearch'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>관리자 아이디찾기</h2>
                    </div>
                    <form onSubmit={onSubmitBtn}>
                        <ul>
                            <li>
                                <input type="text" name='adminName' id='adminName' placeholder='이름을 입력하세요.' value={state.이름} onChange={onchangeName}/>
                            </li>
                            <li>
                                <input type="password" name='adminPw' id='adminPw' placeholder='비밀번호를 입력하세요.' value={state.비밀번호} onChange={onchangePw}/>
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
