import React from 'react';
import '../wrap/scss/ConfirmModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../reducer/confirmModal';
import axios from 'axios';

export default function ConfirmModalComponent()  {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const onClickCloseBtn=(e)=>{
        e.preventDefault(); 

        if(selector.confirmModal.confirmMsg === '자료 등록에 성공하였습니다.' || selector.confirmModal.confirmMsg ==='자료를 수정하였습니다.'){
            const obj = {
                isConfirmModal: false,
                confirmMsg: '',
                회원가입완료: false
            }
            dispatch(confirmModal(obj));
            setTimeout(()=>{
                navigate('/dataList');
            },100)
        }
        else if(selector.confirmModal.confirmMsg === '자료를 삭제하시겠습니까?'){
            // console.log(selector.confirmModal.item);
            // console.log(selector.confirmModal);
            let formData = new FormData();
            formData.append('bookCopyright', selector.confirmModal.item);
            axios({
                url:'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_register_data_table_delete.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    //console.log(res.data);
                    if(res.data === 1){
                        const obj = {
                            isConfirmModal: true,
                            confirmMsg: '자료를 삭제하였습니다.',
                            회원가입완료: false,
                            item: ''
                        }
                        dispatch(confirmModal(obj));
                        setTimeout(()=>{
                            navigate('/index');
                        },100);
                    }
                    else {
                        const obj = {
                            isConfirmModal: true,
                            confirmMsg: '자료를 삭제하는데 실패하였습니다.',
                            회원가입완료: false,
                        }
                        dispatch(confirmModal(obj));
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })

        }
        else {
            const obj = {
                isConfirmModal: false,
                confirmMsg: '',
                회원가입완료: false
            }
            dispatch(confirmModal(obj));
        }
          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    const onClickCancelBtn=(e)=>{
        e.preventDefault();
        const obj = {
            isConfirmModal: false,
            confirmMsg: '',
            회원가입완료: false
        }
        dispatch(confirmModal(obj));

        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id='confirmModal'>
            <div className='container'>
                <div className='confirm-box'>
                    <ul>
                        <li>
                            <div className='message-box'>
                                
                                    {
                                        selector.confirmModal.confirmMsg.split('\n').map((item)=>{
                                            return(
                                                <p>
                                                    {item}
                                                </p>
                                            )
                                        })
                                    }
                                
                            </div>                             
                        </li>
                        <li>
                            <div className={`button-box${selector.confirmModal.confirmMsg==='자료를 삭제하시겠습니까?'?' on':''}`}>
                                <button onClick={onClickCloseBtn} >확인</button>
                                {
                                    selector.confirmModal.confirmMsg === '자료를 삭제하시겠습니까?' && (
                                        <button onClick={onClickCancelBtn}>취소</button>
                                    )
                                }

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

