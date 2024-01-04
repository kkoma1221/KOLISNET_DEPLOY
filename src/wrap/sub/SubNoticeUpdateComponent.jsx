import React from 'react';
import axios from 'axios';
import './scss/subUpdateNotice.scss'
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import SubNoticeComponentChild from './SubNoticeComponentChild';
import { confirmModal } from '../../reducer/confirmModal';

export default function SubNoticeUpdateComponent(){

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state)

    const [state,setState] = React.useState({
        제목:location.state.제목,
        내용:location.state.내용,
        조회수:null,
        작성일:location.state.작성일,
        번호:location.state.번호
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
    const onChangeTitle=(e)=>{
        setState({
            ...state,
            제목:e.target.value
        })
    }
    const onChangeContent=(e)=>{
        setState({
            ...state,
            내용:e.target.value
        })
    }
    const onSubmitUpdate=(e)=>{
        e.preventDefault();
        if(state.제목===''){
            confirmModalMethod('제목을 입력해주세요');
        }
        else if(state.내용===''){
            confirmModalMethod('내용을 입력해주세요');
        }
        else {
            let formData = new FormData();
            formData.append('idx', state.번호);
            formData.append('nSubject', state.제목);
            formData.append('nContent', state.내용);
            axios({
                url: 'http://answotlr12.dothome.co.kr/kolisnet/kolisnet_update_notice_table.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data===1){
                        confirmModalMethod('수정이완료되었습니다.')
                        navigate('/subNotice')
                    }
                    else if(res.data===0){
                        confirmModalMethod('공지사항 등록에 실패하였습니다. 확인하고 다시 시도하세요');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div id='subUpdateNotice'>
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div className="title">
                        <h2>공지사항</h2>
                        <span>| KOLIS-NET에서 알려드리는 공지사항입니다.</span>
                    </div>
                    <form onSubmit={onSubmitUpdate} className="notice">
                        <div className="content">
                            <ul className="notice-title">
                                <li>
                                    <h2>제목</h2>
                                    <input type="text" onChange={onChangeTitle} value={state.제목} placeholder='제목을 입력하세요.' name='title' id='title' />
                                </li>
                                <li>
                                    <h2>내용</h2>
                                    <textarea onChange={onChangeContent} value={state.내용} placeholder='내용을 입력하세요.' name='content' id='content' />
                                </li>
                            </ul>
                        </div>
                        <div className="btn-box">
                            <button type='submit'>제출하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
