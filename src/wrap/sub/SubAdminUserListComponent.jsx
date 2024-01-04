import React from 'react';
import axios from 'axios';
import './scss/subAdminUserList.scss'
import { useDispatch,useSelector } from 'react-redux';

export default function SubAdminUserListComponent() {

    const dispatch = useDispatch(); 
    const selector = useSelector((state)=>state);

    const[state,setState]=React.useState({
        arr:[]
    })

    React.useEffect(()=>{
        axios({
            url:'http://answotlr12.dothome.co.kr/kolisnet/user_list.php',
            method:'GET'
        })
        .then((res)=>{
            let arr=[];
            if(res.data.length>0){
                arr=(res.data.map((item)=>item))
                setState({
                    ...state,
                    arr:arr
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[state.arr])

    const onClickDelete=(e,idx)=>{
        e.preventDefault();
        let 결과 = [];
        결과=state.arr.map((item)=>item.아이디)
        console.log(결과[idx])
        let formData= new FormData();
        formData.append('adminId',결과[idx]);
        axios({
            url:'http://answotlr12.dothome.co.kr/kolisnet/admin_user_list_delete.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.data===1){
                alert('삭제되었습니다.')
            }
            else{
            }
        })
        .catch((err)=>{
            console.log('실패')
        })
    }

    return (
        <div id='subAdminUserList'>
            <ul>
                <ul>
                    <li>
                        <p>아이디</p>
                    </li>
                    <li>
                        <p>비밀번호</p>
                    </li>
                    <li>
                        <p>이름</p>
                    </li>
                    <li>
                        <p>이메일</p>
                    </li>
                    <li>
                        <p>휴대폰</p>
                    </li>
                    <li>
                        <p>가입날짜</p>
                    </li>
                    <li>
                        <p>삭제</p>
                    </li>
                </ul>
                {   state.arr.map((item,idx)=>{
                    return(
                        <div className="list" key={idx}>
                             <li>
                                <p>{item.아이디}</p>
                            </li>
                            <li>
                                <p>{item.비밀번호}</p>
                            </li>
                            <li>
                                <p>{item.이름}</p>
                            </li>
                            <li>
                                <p>{item.이메일}</p>
                            </li>
                            <li>
                                <p>{item.휴대폰}</p>
                            </li>
                            <li>
                                <p>{item.가입날짜}</p>
                            </li>
                            <li>
                                <img onClick={(e)=>onClickDelete(e,idx)} src="./images/sub/adminUserList/창닫기.png" alt="" />
                            </li>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};
