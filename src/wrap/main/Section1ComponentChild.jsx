import React from 'react';
import './scss/section1.scss'

export default function Section1ComponentChild({slide,notice}) {

    const imgView = React.useRef()
    const NoticeView = React.useRef()

    const [state,setState] = React.useState({
        cnt:0,
        cnt2:0
    })
    const onClickLeftBtn=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt-1
        })

    }
    const onClickRightBtn=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt+1
        })
    }


    const onClickNoticeUp=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt2:state.cnt2 + 1
        })
    }
    const onClickNoticeDown=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt2:state.cnt2 - 1
        })

    }
    React.useEffect(()=>{
        imgView.current.style.left=`${-100*state.cnt}%`
        imgView.current.style.transition='all 0.4s ease-in-out'
        if(state.cnt>3){
            imgView.current.style.left=`${0}%`
            imgView.current.style.transition='none'
            setState({
                ...state,
                cnt:1
            })
        }
        else if(state.cnt===-1){
            imgView.current.style.left=`${-300}%`
            imgView.current.style.transition='none'
            setState({
                ...state,
                cnt:2
            })
        }
    },[state.cnt])


    React.useEffect(()=>{
        NoticeView.current.style.transform=`translateY(${ -42 * state.cnt2 }px)`;
        NoticeView.current.style.transition='all 0.4s ease-in-out'
        if(state.cnt2>3){
            NoticeView.current.style.transform=`translateY(${0}px)`;
            NoticeView.current.style.transition='none'
            setState({
                ...state,
                cnt2:0
            })
        }
        else if(state.cnt2===-1){
            imgView.current.style.transition='none'
            setState({
                ...state,
                cnt2:3
            })
        }
    },[state.cnt2])


    return (
        <div className='container'>
            <div className="img-wrap">
                <div className="img-view" ref={imgView}>
                    {
                        slide.map((item,idx)=>{
                            return(
                                <div className="img-box" key={idx}>
                                    <img src={`./images/main/section1/${item.이미지}`} alt="" />
                                </div>
                            )
                        })

                    }
                </div>
                <div className="left-btn" onClick={onClickLeftBtn}>
                    <img src="./images/main/section1/left_btn.png" alt="" />
                </div>
                <div className="right-btn" onClick={onClickRightBtn}>
                    <img src="./images/main/section1/right_btn.png" alt="" />
                </div>
            </div>
            <div className="under-slide-wrap">
                    <ul ref={NoticeView}>
                        { notice.map((item,idx)=>{
                                return(
                                    <li key={idx} >
                                        <p>{item.공지}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="btn-box">
                            <a onClick={onClickNoticeUp}></a>
                            <a onClick={onClickNoticeDown}></a>
                    </div>
                    <div className="second">
                        <h4>공지</h4>
                    </div>
                    <div className="three">
                        <a>+ 더보기</a>
                    </div>
            </div>
        </div>
    );
};
