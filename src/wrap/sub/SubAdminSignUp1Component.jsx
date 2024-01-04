import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import './scss/subAdminSignUp.scss'

export default function SubAdminSignUp1Component(){

    const dispatch = useDispatch()

    const [state,setState] = React.useState({
        아이디: '',
        idGuidText: '',
        IsidGuidText:false,
        isId:false,
        idChk:true,

        pwGuidText: '',
        비밀번호:'',
        비밀번호재입력:'',
        pwSameGuid:'',
        isPw:false,
        isPwSame:false,

        이메일: '',
        emailGuidText: '',
        IsEmailGuidText:false,
        isEmail:false,
        emailChk:true,

        이름:'',

        휴대폰:'',
        hpGuidText:'',
        isHp:false,

        아이디중복:[],
        이메일중복:[]
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
        axios({
            url:'http://answotlr12.dothome.co.kr/kolisnet/kolisnet_admin_id_check.php',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                let 아이디중복 = state.아이디중복
                if(res.data.length>0){
                    res.data.map((item)=>{
                        아이디중복=[...아이디중복,item.아이디]
                        setState({
                            ...state,
                            아이디중복:아이디중복
                        })
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err+'실패')
        })
        return;
    },[])

    React.useEffect(()=>{
        axios({
            url:'http://answotlr12.dothome.co.kr/kolisnet/kolisnet_admin_email_check.php',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                let 이메일중복 = state.이메일중복
                if(res.data.length>0){
                    res.data.map((item)=>{
                        이메일중복=[...이메일중복,item.이메일]
                        setState({
                            ...state,
                            이메일중복:이메일중복
                        })
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err+'실패')
        })
        return;
    },[state.아이디중복])




    const navigate=useNavigate()

    const onChangeId=(e)=>{

        let     idGuidText= '';
        let     idChk=true
        let     IsidGuidText=false;
        let     isId=false;
        let     아이디= e.target.value;
        const   regexp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const   regexp2 = /[A-Z]/g;
        const   regexp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const   regexp4 = /\s/g;
        const   regexp5 = /^(.){4,16}$/g;

        if(아이디===''){
            idGuidText = '아이디를 입력해주세요';
            isId=false
        }
        else if(regexp5.test(아이디)===false){
            idGuidText = '아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.'
            IsidGuidText = false
            isId=false
        }
        else if(regexp1.test(아이디)===true || regexp2.test(아이디)===true || regexp3.test(아이디)===true || regexp4.test(아이디)===true){
            idGuidText = '대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.'
            IsidGuidText = false
            isId=false
        }
        else if(state.아이디중복.includes(아이디)===true){
            idGuidText = `{${아이디}는 사용 불가능한 아이디입니다.}`;
            IsidGuidText = false;
            isId=false;
            idChk=false;
        }
        else{
            idGuidText = `{${아이디}는 사용 가능한 아이디입니다.}`;
            IsidGuidText = true
            isId=true
            idChk=true;

        }
        setState({
            ...state,
            아이디: 아이디,
            idGuidText: idGuidText,
            IsidGuidText:IsidGuidText,
            isId:isId,
            idChk:idChk
        });
    }
    const onChangePw=(e)=>{
        let 비밀번호 = e.target.value;
        let pwGuidText='';
        let isPw=false
        const regexpPw1 = /^(.){10,16}$/g;
        const regexpPw2 = /((?=.*[A-Za-z])+(?=.*[0-9])+)|((?=.*[A-Za-z])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)|((?=.*[0-9])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)/g;
        const regexpPw3 = /\s/g;
        const regexpPw4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regexpPw5 = /(\d)\1\1/g; 

        if(regexpPw1.test(비밀번호)===false || regexpPw2.test(비밀번호)===false || regexpPw3.test(비밀번호)===true || regexpPw4.test(비밀번호)===true || regexpPw5.test(비밀번호)===true){
            pwGuidText="비밀번호 형식을 다시 한번 확인해 주세요."
            isPw=false
        }
        else{
            isPw=true
        }
        setState({
            ...state,
            비밀번호: 비밀번호,
            pwGuidText:pwGuidText,
            isPw:isPw
        });
    }
    const onChangePw1=(e)=>{
        let pwSameGuid=''
        let isPwSame=false
        if(state.비밀번호!==e.target.value){
            pwSameGuid='비밀번호가 일치하지 않습니다.'
            isPwSame=false
        }
        else{
            pwSameGuid=''
            isPwSame=true
        }
        setState({
            ...state,
            pwSameGuid:pwSameGuid,
            isPwSame:isPwSame,
            비밀번호재입력:e.target.value
        })
    }
    const onchangeName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        })
    }
    const onChangeEmail=(e)=>{
        const {value} = e.target;
        let emailGuidText = '';
        let emailChk=true
        let IsEmailGuidText = false
        let isEmail=false
        const regexp = /^[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'?]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+)*@[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+)*\.[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+$/g;

        if(regexp.test(value)===false){
            emailGuidText ='유효한 이메일을 입력해주세요.';
            IsEmailGuidText = false
            isEmail=false
        }
        else if(state.이메일중복.includes(value)===true){
            emailGuidText = `{${value}는 사용 불가능한 이메일입니다.}`;
            IsEmailGuidText = false
            isEmail=false
            emailChk=false
        }
        else {
            emailGuidText ='사용 가능한 이메일 입니다.';
            IsEmailGuidText = true
            isEmail=true
            emailChk=true
        }

        setState({
            ...state,
            이메일: value,
            emailGuidText: emailGuidText,
            IsEmailGuidText:IsEmailGuidText,
            isEmail:isEmail,
            emailChk:emailChk
        });
    }
    const onChangeHp=(e)=>{
        const {value} = e.target;
        let 휴대폰 = '';
        let hpGuidText=''
        let isHp=false
        const regexp = /[^0-9]/g;
        const regexp1 = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
        휴대폰 = value.replace(regexp, '');
        if(regexp1.test(휴대폰)===false){
            hpGuidText='올바르지 않은 휴대폰 번호 형식입니다.'
            isHp=false
        }
        else{
            isHp=true
        }
        setState({
            ...state,
            휴대폰:휴대폰,
            hpGuidText:hpGuidText,
            isHp:isHp
        })
    }
    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(state.아이디===''){
            confirmModalMethod('아이디를 입력해주세요')
        }
        else if(state.idChk===false){
            confirmModalMethod('중복된 아이디입니다.')
        }
        else if(state.isId===false){
            confirmModalMethod('아이디 형식을 확인해주세요.')
        }
        else if(state.비밀번호===''){
            confirmModalMethod('비밀번호를 입력해주세요')
        }
        else if(state.isPw===false){
            confirmModalMethod('비밀번호 형식을 확인해주세요.')
        }
        else if(state.비밀번호재입력===''){
            confirmModalMethod('비밀번호를 다시 입력해주세요')
        }
        else if(state.isPwSame===false){
            confirmModalMethod('비밀번호가 일치하지않습니다.')
        }
        else if(state.이름===''){
            confirmModalMethod('이름을 입력해주세요')
        }
        else if(state.이메일===''){
            confirmModalMethod('이메일을 입력해주세요')
        }
        else if(state.emailChk===false){
            confirmModalMethod('중복된 이메일입니다.')
        }
        else if(state.isEmail===false){
            confirmModalMethod('이메일을 형식을 확인해주세요.')
        }
        else if(state.휴대폰===''){
            confirmModalMethod('휴대폰번호를 입력해주세요.')
        }
        else if(state.isHp===false){
            confirmModalMethod('휴대폰번호 형식을 확인해주세요.')
        }
        else{
            const formData = new FormData(); 
            formData.append('adminId',       state.아이디);
            formData.append('adminPw',       state.비밀번호);
            formData.append('adminName',     state.이름);
            formData.append('adminEmail',    state.이메일);
            formData.append('adminHp',       state.휴대폰);
            axios({
                url: 'http://answotlr12.dothome.co.kr/kolisnet/admin_insert_table.php',
                method: 'POST',
                data: formData  
            })
            .then((res)=>{
                
                console.log(res.status)
                if(res.status==200){  
                    if(res.data==1){
                        navigate('/index',{
                            state:{
                                아이디:state.아이디,
                                이름:state.이름,
                                이메일:state.이메일
                            }   
                        })                         
                    }   
                    else if(res.data==0){ 
                        confirmModalMethod('확인하고 다시 시도해주세요');
                    }
                }                              
            })
            .catch((err)=>{
                console.log(`AXIOS 전송 실패! ${err} `);
            });
        }
    
    }

    return (
        <div id='subAdminSignUp'>
            <div className="content">
                <div className="title">
                    <h2>관리자 회원가입</h2>
                </div>
                <form onSubmit={onSubmitForm}>
                    <ul>
                        <li>
                            <label>아이디</label>
                            <input type="text" name='adminId' id='adminId' value={state.아이디} onChange={onChangeId} />
                            <p className={state.IsidGuidText?'guid':'guid on'}>{state.idGuidText}</p>
                            <p className='guid'> (영문소문자/숫자, 4~16자)</p>
                        </li>
                        <li>
                            <label>비밀번호</label>
                            <input type="password" name='adminPw' id='adminPw' value={state.비밀번호} onChange={onChangePw} />
                            <p className='guid on'>{state.pwGuidText}</p>
                            <p className='guid'>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
                        </li>
                        <li>
                            <label>비밀번호 재입력</label>
                            <input type="password" name='adminPw' id='adminPw' value={state.비밀번호재입력}  onChange={onChangePw1} />
                            <p className='guid on'>{state.pwSameGuid}</p>
                        </li>
                        <li>
                            <label>이름</label>
                            <input type="text" name='adminName' id='adminName' value={state.이름} onChange={onchangeName} />
                        </li>
                        <li>
                            <label>이메일</label>
                            <input type="text" name='adminEmail' id='adminEmail' value={state.이메일} onChange={onChangeEmail} />
                            <p className={state.IsEmailGuidText?'guid':'guid on'}>{state.emailGuidText}</p>
                        </li>
                        <li>
                            <label>전화번호</label>
                            <input type="text" name='adminHp' id='adminHp' value={state.휴대폰} onChange={onChangeHp} maxLength={11} />
                            <p className="guid on">{state.hpGuidText}</p>
                        </li>
                    </ul>
                    <button>회원가입 하기</button>
                </form>
            </div>
        </div>
    );
};
