import React from 'react';
import axios from 'axios';
import './scss/subNoticeView.scss'
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import SubNoticeComponentChild from './SubNoticeComponentChild';

export default function SubNoticeViewComponent(){

    const location = useLocation()
    const navigate = useNavigate()
    const selector = useSelector((state)=>state)
    const dispatch = useDispatch()
    const [state,setState] = React.useState({
        제목:'',
        내용:'',
        조회수:null,
        작성일:'',
        관리자로그인정보:[]
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

    

    React.useEffect(()=>{
        let 제목=''
        let 내용=''
        let 조회수=''
        let 작성일=''
        let 관리자로그인정보=[]
        if(location.state.item!==null){
            제목=location.state.item.제목
            내용=location.state.item.내용
            조회수=location.state.item.조회수
            작성일=location.state.item.작성일
        }
        if(location.state.관리자로그인정보!==null){
            관리자로그인정보=location.state.관리자로그인정보
        }
        setState({
            ...state,
            제목:제목,
            내용:내용,
            조회수:조회수,
            작성일:작성일,
            관리자로그인정보:관리자로그인정보
        })
    },[location.state])

    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx', location.state.item.번호);
        axios({
            url:'http://answotlr12.dothome.co.kr/kolisnet/kolisnent_notice_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{               
            if(res.status===200){   
                if(res.data===1){                        
                    confirmModalMethod('공지사항이 삭제가 완료되었습니다.');
                    navigate('/subNotice')
                }                 
                else{
                    confirmModalMethod('공지사항 폼내용을 확인하고 다시 시도해주세요');
                }
                
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    }
    const onClickUpdate=(e)=>{
        e.preventDefault();
        navigate('/subUpdateNotice',{
            state:{
                제목:state.제목,
                내용:state.내용,
                작성일:state.작성일.split(' ')[0],
                번호:location.state.item.번호
            }
        })
    }
    return (
        <div id='subNoticeView'>
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div className="title">
                        <h2>공지사항</h2>
                        <span>| KOLIS-NET에서 알려드리는 공지사항입니다.</span>
                    </div>
                    <div className="first">
                        <div className="content">
                            <ul className="notice-title">
                                <li>
                                    제목
                                </li>
                                <li>
                                    작성일
                                </li>
                                <li>
                                    조회수
                                </li>
                            </ul>
                            <ul className='title-text'>
                                <li>{state.제목}</li>
                                <li>{state.작성일.split(' ')[0]}</li>
                                <li>{state.조회수}</li>
                            </ul>
                            <div className="notice-content">
                                {state.내용}
                            </div>
                            {   state.관리자로그인정보 &&
                                <div className="btn-box">
                                    <button onClick={onClickUpdate}>수정하기</button>
                                    <button onClick={onClickDelete}>삭제하기</button>
                                </div>
                            }
                        </div>
                    </div>
                    <SubNoticeComponentChild/>
                </div>
            </div>
        </div>
    );
};
