import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sub1ComponentChild({category, title}) {

    const navigate = useNavigate();

    const onClicklist=(e, item, idx)=>{
        e.preventDefault();
        // console.log(item);
        // console.log(idx);
        navigate('/productDetail', {state:item});
    }

    React.useEffect(()=>{
        console.log(category);
        console.log(title);
    },[category, title]);

    return (
        <div className="result-list-box">
            <div className="title">
                <span>
                    <h3>{title}</h3>
                    <em>{`결과 ${category.length}건`}</em>
                </span>
                <a href="!#">+ 모두보기</a>
            </div>
            <ul>
                {
                    category.length === 0 && (
                        <li className='empty'><p>자료가 없습니다.</p></li>
                    )
                }
                {
                    category.length > 0 && (
                        category.map((item, idx)=>{
                            // console.log(item.bookLibrary);
                            let library = [];
                            library = item.bookLibrary.split(',');
                            // console.log(library);
                            return (
                                <li className='list' key={idx}>
                                    <div className={`col1${item.bookSubject==='사회과학'?' c5696ba':item.bookSubject ==='기술과학'?' cc0847b':item.bookSubject ==='자연과학'?' cc28000':item.bookSubject ==='순수과학'? 'cc28000':item.bookSubject==='문학'?' cf45c01':item.bookSubject==='어학'?' c00b5b3':item.bookSubject==='역사'?' c808080':item.bookSubject==='예술'?' c6c9773':item.bookSubject==='종교'?' c009dde':item.bookSubject==='철학'?' cb073d9':' cea6478'}`}>
                                        <span className={(item.bookSubject === '사회과학'||item.bookSubject ==='기술과학'||item.bookSubject ==='자연과학'||item.bookSubject ==='순수과학')?'word4':'word2'}>{item.bookSubject}</span>
                                    </div>
                                    <div className="result-info">
                                        <div className="row1">
                                            <a href="!#" onClick={(e)=>onClicklist(e, item, idx)}>
                                                <p>{`${item.bookTitle} / ${item.bookWriter}`}</p>
                                            </a>
                                        </div>
                                        <div className="row2">
                                            <h4>{`${item.bookStore} : 1개 판 : ${item.bookYear}`}</h4>
                                            <h5>{`${library.length}개 도서관 소장`}</h5>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )
                }
            </ul>
        </div>
    );
};
