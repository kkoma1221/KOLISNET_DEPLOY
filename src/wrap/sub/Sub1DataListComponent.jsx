import React from 'react';
import './scss/dataList.scss';
import Sub1DataListComponentChild from './Sub1DataListComponentChild';
import axios from 'axios';

export default function Sub1DataListComponent(){

    const [state, setState] = React.useState({
        dataList: []
    });

    React.useState(()=>{
        axios({
            url:'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_register_data_table_select.php',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res);
                // console.log(res.data);
                if(res.data.length > 0){
                    setState({
                        ...state,
                        dataList: res.data
                    });
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div id='sub1DataList'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>자료목록</h2>
                    </div>
                    <div className="content">
                        <div className="list-header">
                            <ul>
                                <li className='col1'><span>번호</span></li>
                                <li className='col2'><span>자료유형</span></li>
                                <li className='col3'><span>주제</span></li>
                                <li className='col4'><span>책제목</span></li>
                                <li className='col5'><span>저자</span></li>
                                <li className='col6'><span>저작번호</span></li>
                                <li className='col7'><span>수정</span></li>
                                <li className='col8'><span>삭제</span></li>
                            </ul>
                        </div>
                        <Sub1DataListComponentChild dataList={state.dataList}/>
                    </div>
                </div>
            </section>
        </div>
    );
};
