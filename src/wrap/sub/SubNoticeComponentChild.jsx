import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SubNoticeComponentChild(){

    const [state,setState] = React.useState({
        공지사항:[],
        cnt:0,
    })
    const navigate = useNavigate()

    const onClickWrite=(e)=>{
        e.preventDefault();
        navigate('/noticeWrite')
    }
    const onClickTitle=(e,item)=>{
        e.preventDefault();
        navigate('/noticeView', {
            state: {
                item:item,
                관리자로그인정보: state.관리자로그인정보,
        }});
    }

    React.useEffect(()=>{
        let 관리자로그인정보 = state.관리자로그인정보
        if(localStorage.getItem('KOLISNET_ADMIN_SIGNIN')!==null){
            관리자로그인정보=JSON.parse(localStorage.getItem('KOLISNET_ADMIN_SIGNIN'))
        }
        axios({
            url: 'http://answotlr12.dothome.co.kr/kolisnet/kolisnet_select_notice_table.php',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    공지사항: res.data,
                    관리자로그인정보:관리자로그인정보
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <div className="header-text">
                    <span>총 게시물 <strong>{state.공지사항.length}</strong></span>
            </div>
            <div className="notice">
                <div className="notice-header">
                            <ul className='header'>
                                <li>번호</li>
                                <li>제목</li>
                                <li>작성일</li>
                                <li>첨부</li>
                                <li>조회수</li>
                            </ul>
                            {   state.공지사항.map((item,idx)=>{
                                return(
                                    <ul key={idx}>
                                        <li>{idx+1}</li>
                                        <li onClick={(e)=>onClickTitle(e,item)}>{item.제목}</li>
                                        <li>{item.작성일.split(' ')[0]}</li>
                                        <li></li>
                                        <li>{state.cnt}</li>
                                    </ul>
                                )
                            })

                            }
                </div>
            </div>
            {   state.관리자로그인정보!==undefined  &&
            <div className="btn-box">
                <button onClick={onClickWrite}>공지사항 작성</button>
            </div>      
            }
        </>
    );
};