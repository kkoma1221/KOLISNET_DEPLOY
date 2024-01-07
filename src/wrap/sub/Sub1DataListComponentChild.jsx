import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sub1DataListComponentChild({dataList}){

    const navigate = useNavigate();

    const onClickDataUpdate=(e, item)=>{
        e.preventDefault();
        // console.log(item);
        navigate('/dataListUpdate', {state:item});
    }

    const onClickDataDelete=(e)=>{
        e.preventDefault();
    }

    return (
        <div className="list-data">
            {
                dataList.length > 0 && (
                    dataList.map((item, idx)=>{
                        return (
                            <ul key={idx}>
                                <li className='col1'><span>{idx}</span></li>
                                <li className='col2'><span>{item.bookType}</span></li>
                                <li className='col3'><span>{item.bookSubject}</span></li>
                                <li className='col4'><span>{item.bookTitle}</span></li>
                                <li className='col5'><span>{item.bookWriter}</span></li>
                                <li className='col6'><span>{item.bookCopyright}</span></li>
                                <li className='col7'><span><button onClick={(e)=>onClickDataUpdate(e, item)}><img src="./images/sub/sub1/icon_update.svg" alt="수정" /></button></span></li>
                                <li className='col8'><span><button onClick={onClickDataDelete}><img src="./images/sub/sub1/icon_delete.svg" alt="삭제" /></button></span></li>
                            </ul>
                        )
                    })
                )
            }
        </div>
    );
};
