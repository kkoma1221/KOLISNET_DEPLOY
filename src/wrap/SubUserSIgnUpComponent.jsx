import React from 'react';
import axios from 'axios';
import './scss/userSignUp.scss';
import isSignUpModal, { SignUpModal } from '../reducer/isSignUpModal';
import { isAddress } from '../reducer/isAddress';
import { confirmModal } from '../reducer/confirmModal';
import { useDispatch, useSelector } from 'react-redux';


export default function SubUserSIgnUpComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const [state, setState] = React.useState({
        isSignUp1:true,
        isSignUp2:false,
        agreed1:false,
        agreed2:false,
        isSignUp3:false,
        isSignUp4:false,
        isSignUp5:false,
        isEmail:false,
        userType:'',
        userId:'',
        userPw1:'',
        userPw2:'',
        userHp1:'',
        userHp2:'',
        userHp3:'',
        userEmail1:'',
        userEmail2:'',
        userEmail3:'',
        userAddress1:'',
        userAddress2:'',
        userAddress3:'',
        userName:'',
        userBirth:'',
        userGender:'',
        userSMS:'',
        아이디중복확인:false
    });

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

    const onClickSignModalClose=(e)=>{
        e.preventDefault();
        dispatch(SignUpModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    const onChangeName=(e)=>{
        let {value} = e.target;
        const exp1=/[1-9]/g;
        if(exp1.test(value)===true){
            confirmModalMethod("문자만 입력해주세요");
        }
        else{
            setState({
                ...state,
                userName:value
            })
        }
    }

    const onChangeuserBirth=(e)=>{
        let {value} = e.target;
        const exp1=/[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]/g;
        const exp2=/[0-9]{1,8}/g;
        if(exp1.test(value)===true){
            confirmModalMethod('숫자만 입력해 주세요');
        }
        else if(exp2.test(value)===false){
            confirmModalMethod('8자리를 초과 할수 없습니다.');
        }
        else{
            setState({
                ...state,
                userBirth:value
            })
        }
    }

    const onClickCertification=(e)=>{
        e.preventDefault();
        if(state.userName==='' && state.userBirth===''){
            confirmModalMethod('본인인증은 필수 입니다')
        }
        else{
            setState({
                ...state,
                isSignUp3:false,
                isSignUp4:true
            })
        }
    }

    const onChangeEmail3=(e)=>{
        let {value} = e.target;
        if(value==='**'){
            setState({
                ...state,
                isEmail:true
            })
        }
        else{
            setState({
                ...state,
                isEmail:false,
                userEmail3:value
            })
        }
    }

    const onChangeUserType=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userType:value
        })
    }

    const onChangeUserId=(e)=>{
        let {value} = e.target;
        const exp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const exp2 = /[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣1-9]{12}/g;
        if(exp1.test(value)===true){
            confirmModalMethod('특수문자는 사용불가 합니다.');
        }
        else if(exp2.test(value)===true){
            confirmModalMethod('최대 12자까지 입력 가능합니다.');
        }
        else{
            setState({
                ...state,
                userId:value
            })
        }
    }

    const onClickIdCheck=(e)=>{
        e.preventDefault();
        if(state.userId===''){
            confirmModalMethod('아이디를 입려하주세요');
        }
        else{
            const fromData = new FormData();
            fromData.append('userId', state.userId);

            axios({
                url:'http://guon299.co.kr/kolisnet/user_ID_Check.php',
                method:'POST',
                data:fromData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data===1){
                        setState({
                            ...state,
                            아이디중복확인:false
                        })
                        confirmModalMethod('중복된 아이디 입니다.');
                    }
                    else{
                        setState({
                            ...state,
                            아이디중복확인:true
                        })
                        confirmModalMethod('중복되지 않은 아이디 입니다.');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    const onChangeUserPw1=(e)=>{
        let {value} = e.target;
        const exp1=/[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣1-9!@#$%^&*()]{16}/g;
        const exp2 = /[~`\-_=+[{}\];:'",<.>/?]/g;
        const exp3=/\s/g;
        if(exp2.test(value)===true){
            alert('사용불가 문자 입니다.');
        }
        else if(exp1.test(value)===true){
            alert('16자까지 입력가능합니다');
        }
        else if(exp3.test(value)===true){
            alert('공백사용불가');
        }
        setState({
            ...state,
            userPw1:value
        })

    }

    const onChangeUserPw2=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userPw2:value
        })
    }

    const onChangeHp1=(e)=>{
        let {value} = e.target;
        const exp1=/[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if(exp1.test(value)===true){
            alert('숫자만 입력')
        }
        else{
            setState({
                ...state,
                userHp1:value
            })
        }
    }
    const onChangeHp2=(e)=>{
        let {value} = e.target;
        const exp1=/[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if(exp1.test(value)===true){
            alert('숫자만 입력')
        }
        else{
            setState({
                ...state,
                userHp2:value
            })
        }
    }
    const onChangeHp3=(e)=>{
        let {value} = e.target;
        const exp1=/[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if(exp1.test(value)===true){
            alert('숫자만 입력')
        }
        else{
            setState({
                ...state,
                userHp3:value
            })
        }
    }

    const onChangeGender=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userGender:value
        })
    }

    const onChangeEmail1=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userEmail1:value
        })
    }
    const onChangeEmail2=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userEmail2:value
        })
    }
    const onChangeCheckbox=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userSMS:value
        })
    }

    const onChangeAddress=(e)=>{
        let {value} = e.target;
        setState({
            ...state,
            userAddress3:value
        })
    }

    React.useEffect(()=>{
        setState({
            ...state,
            userAddress1:selector.address.주소.우편번호,
            userAddress2:selector.address.주소.주소1,
            userAddress3:selector.address.주소.주소2
        })
    },[selector.address])

    const onClickAddress=(e)=>{
        e.preventDefault();
        dispatch(isAddress(true));
    }

    const onSubmitUserSingUp=(e)=>{
        e.preventDefault();
        if(state.userId===''){
            confirmModalMethod('아이디를 입력 하세요');
        }
        if(state.userPw1===''){
            confirmModalMethod('비밀번호를 입력 하세요');
        }
        if(state.userPw1!==state.userPw2){
            confirmModalMethod('입력한 비밀번호를 적어주세요');
        }
        else{
            const formData = new FormData();
            formData.append('userType',state.userType)
            formData.append('userId',state.userId)
            formData.append('userPw',state.userPw1)
            formData.append('userName',state.userName)
            formData.append('userBirth',state.userBirth)
            formData.append('userAddress',`${state.userAddress1}${state.userAddress2}${state.userAddress3}`)
            formData.append('userGender',state.userGender)
            formData.append('userHp',`${state.userHp1}-${state.userHp2}-${state.userHp3}`)
            formData.append('userEmail',`${state.userEmail1}@${state.isEmail===true?state.userEmail2:state.userEmail3}`)
            formData.append('SMSSelect',state.SMSSelect)
    
            axios({
                url:'http://guon299.co.kr/kolisnet/user_insert_table.php',
                method:'POST',
                data:formData
            })
            .then((res)=>{
                if(res.status===200){
                    if(res.data===1){
                        setState({
                            ...state,
                            isSignUp4:false,
                            isSignUp5:true
                        })
                    }
                    else if(res.data==0){ 
                        confirmModalMethod('확인하고 다시 시도해주세요');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    const onClickBtn1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSignUp1:false,
            isSignUp2:true
        })
    }

    const onChangeAgreed1=(e)=>{
        let {value} = e.target
        if(value==="동의합니다"){
            setState({
                ...state,
                agreed1:true
            })
        }
        else{
            setState({
                ...state,
                agreed1:false
            })
        }
    }
    const onChangeAgreed2=(e)=>{
        let {value} = e.target
        if(value==="동의합니다"){
            setState({
                ...state,
                agreed2:true
            })
        }
        else{
            setState({
                ...state,
                agreed2:false
            })
        }
    }

    const onClickDisagree=(e)=>{
        e.preventDefault();
        dispatch(isSignUpModal(false));
    }
    const onClickAgreement=(e)=>{
        e.preventDefault();
        if(state.agreed1===true && state.agreed2===true){
            setState({
                ...state,
                isSignUp2:false,
                isSignUp3:true
            })
        }
        else{
            alert('이름과 생년월일을 입력 해주세요')
        }
    }

    const onClickFin=(e)=>{
        e.preventDefault();
        dispatch(SignUpModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id='SubUserSIgnUp'>
                <div className="window-bar">
                    <button className='close-btn' onClick={onClickSignModalClose}>X</button>
                </div>
            <div id="container1">
                <div className="headre">
                    <div className="logo">
                        <span></span>
                    </div>
                </div>
                {
                    state.isSignUp1 && (
                        <div className="main1">
                            <div className="section1">
                                <h2>국립중앙도서관에 오신 것을 환영합니다.</h2>
                            </div>
                            <div className="section2">
                                <div className="textbox">
                                    <h2>일반회원 가입</h2>
                                    <h3>통합회원으로 가입하시면 국립중앙도서관에서 운영중인 <em>다양한 서비스를 하나의 아이디로 편리하게</em> 이용하실 수 있습니다.</h3>
                                </div>
                                <div className="button-box">
                                    <button className='btn1' onClick={onClickBtn1}>내국인 가입</button>
                                    <button className='btn2'>내국인 가입(장애인)</button>
                                    <button className='btn3'>외국인 가입(SIGN UP)</button>
                                </div>
                            </div>
                            <div className="section3">
                            <div className="textbox">
                                    <h2>기관회원 가입</h2>
                                    <h3>기관회원으로 가입하시려면 도서관부호 신청을 해주세요.</h3>
                                </div>
                                <div className="button-box">
                                    <button className='btn1'>도서관 부호 신청</button>
                                </div>
                            </div>
                            <div className="section4">
                                <div className="text-box">
                                    <h2>· 통합회원 전환 문의 : <em>02-590-0708</em></h2>
                                    <h3>· 회원가입,아이디/비밀번호 분실 등 관련 문의 : <em>02-590-0708, 02-590-6258</em></h3>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    state.isSignUp2 && (
                        <div className="main2">
                            <div className="section1">
                                <ul>
                                    <li><span>1</span><p>개인정보 수집 및 이용동의</p></li>
                                    <li><span>2</span><p>본인인증</p></li>
                                    <li><span>3</span><p>가입정보 입력</p></li>
                                    <li><span>4</span><p>가입 완료</p></li>
                                </ul>
                                <div className="txt-box">
                                    <h2>반드시 약관 내용을 읽어 보신 후 가입하시기 바랍니다. 통합회원 약관 및 개인정보 수집,이용에 동의해주셔야 가입이 가능합니다.</h2>
                                </div>
                            </div>
                            <div className="section2">
                                <div className="title">
                                    <h2>통합회원 이용약관</h2>
                                </div>
                                <div className="text-box">
                                    <span>제 1 장 총 칙
                                            제 1 조 (목적)

                                            본 약관은 국립중앙도서관(이하 “도서관”) 사이트가 제공하는 서비스(이하 “서비스”) 및 자료의 이용 조건 및 절차, 이용자와 도서관의 권리, 의무, 책임사항 및 기타 제반 사항을 규정함을 목적으로 합니다.

                                            제 2 조 (정의)

                                            ①본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

                                            1.‘서비스’라 함은 온라인사이트 이용 및 오프라인도서관 이용 모두를 말합니다.

                                            2.‘사이트’라 함은 국립중앙도서관 홈페이지, 국립어린이청소년도서관 홈페이지, 국립세종도서관 홈페이지, 오아시스 홈페이지, 사서지원서비스 홈페이지, 국가자료종합목록 홈페이지, 공공도서관 지원서비스 홈페이지를 말합니다.

                                            3.'회원'이라 함은 사이트에 접속하여 이 약관에 동의하고, 개인 정보를 제공하여 회원 등록을 한 자로서, 도서관에서 제공하는 자료와 서비스를 이용할 수 있는 자를 말합니다.

                                            4.'이용계약'이라 함은 본 약관을 포함하여 서비스 이용과 관련하여 도서관과 회원 간에 체결하는 모든 계약을 말합니다.

                                            5.'회원ID(아이디)'라 함은 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 도서관이 부여하는 영문자와 숫자의 조합을 말합니다.

                                            6.'비밀번호'라 함은 이용자ID로 식별되는 회원의 본인 여부를 검증하기 위하여 회원이 설정한 고유의 문자와 숫자의 조합을 말합니다.

                                            7.‘이용증’이라 함은 회원이 도서관 출입 및 도서관 내 자료 이용을 위하여 도서관에서 승인을 받은 출입카드를 말합니다.

                                            8.‘대출증’이라 함은 회원이 국립세종도서관 밖으로 자료를 대출하기 위해 국립세종도서관에서 승인을 받은 대출카드를 말하며 대출증은 이용증을 포함합니다.

                                            9.‘게시물’이라 함은 회원이 서비스를 이용하면서 게시한 글, 사진, 동영상 등 각종 파일과 링크 등을 말합니다.

                                            10.'탈퇴'라 함은 도서관 또는 회원이 이용계약을 종료하는 것을 말합니다.

                                            ②본 약관에서 사용하는 용어 중 제1항에서 정의하지 않은 용어는 관계 법령 및 사이트 별 안내에서 정하는 바에 따르며, 그 외에는 일반 관례에 따릅니다.

                                            제 3 조 (약관의 효력 및 변경)

                                            ①본 약관은 사이트를 통해 온라인으로 공시되고, 합리적인 사유가 발생할 경우 도서관은 관련 법령에 위배되지 않는 범위 안에서 개정할 수 있습니다. 개정된 약관은 정당한 절차에 따라 사이트를 통해 공지됨으로써 효력이 발휘됩니다.

                                            ②회원은 정기적으로 사이트를 방문하여 약관의 변경사항을 확인하여야 합니다. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원의 피해는 도서관에서 책임지지 않습니다.

                                            ③회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴(해지)를 요청할 수 있습니다.

                                            제 4 조 (약관 외 준칙)

                                            ①도서관은 필요한 경우 개별 서비스에 대하여 약관 및 이용 규정(이하 ‘서비스별 안내’)을 정할 수 있으며, 본 약관과 서로 상충되는 경우에는 서비스별 안내의 내용을 우선하여 적용합니다.

                                            ②본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 의합니다.

                                            제 2 장 이용 계약의 성립 및 해지
                                            제 5 조 (이용계약의 성립)

                                            ①이용계약은 회원이 되고자 하는 자가 본 이용 약관에 동의와 이용 신청에 대하여 도서관의 이용 승낙으로 성립됩니다.

                                            ②이용계약에 대한 동의는 이용 신청 당시 사이트의 ‘동의함’버튼을 누름으로써 의사 표시를 합니다.

                                            ③국립중앙도서관, 국립어린이청소년도서관, 국립세종도서관, 오아시스, 사서지원서비스, 국가자료종합목록, 공공도서관 지원서비스의 책바다 회원서비스는 통합회원으로 가입하여 사이트의 회원서비스를 이용할 수 있습니다.

                                            제 6 조 (회원 가입 및 탈퇴)

                                            ①회원 가입은 신청자가 소정의 신청 양식에서 요구하는 사항을 기록하여 가입을 완료하는 것으로 성립됩니다.

                                            ②모든 회원은 반드시 회원 본인의 정보를 제공하여야만 서비스를 이용할 수 있으며, 타인의 정보를 도용하거나 허위 정보를 등록한 회원은 서비스 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌 받을 수 있습니다.

                                            ③각 호의 하나에 해당되는 경우 회원 가입을 취소할 수 있습니다.

                                            1.다른 사람의 명의를 사용하여 신청하였을 경우

                                            2.회원가입 신청서의 내용을 허위로 기재하였거나 신청하였을 경우

                                            3.14세 미만 아동이 법정대리인(부모 등)의 동의를 얻지 아니한 경우

                                            4.사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 경우

                                            5.다른 사람의 사이트 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 경우

                                            6.사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우

                                            7.기타 사이트가 정한 회원가입요건이 미비 되었을 경우

                                            ④회원은 이용 계약을 해지하고자 하는 경우 본인이 회원 탈퇴를 해야 합니다.

                                            ⑤회원이 작성한 게시물 및 제공한 정보는 도서관 정책에 의해 일정기간을 유지하고 보관 또는 소멸됩니다. 다만, 타인에 의해 재게시되거나, 게시판, 커뮤니티, 카페 등 공유 및 알림의 목적으로 등록된 게시물 등은 삭제되지 않으니 사전에 삭제 후 탈퇴하여야 합니다.

                                            ⑥도서관에서 승인을 받은 이용증 또는 대출증을 사용하고 계신 경우, 회원 탈퇴와 함께 이용증 또는 대출증 사용이 불가능 합니다.

                                            ⑦국립세종도서관 자료를 관외 대출 중인 경우, 반드시 자료 반납 후 회원탈퇴 하여야 합니다.

                                            ⑧회원 탈퇴 시, 즉시 개인정보의 처리 및 이용이 중지됩니다. 탈퇴한 개인정보는 공공기록물법에 따라 기록물 파기시까지 별도 보관합니다.

                                            ⑨본 약관 제15조에 의해 이용제한 조치가 된 이용자 혹은 서비스를 이용중인 이용자는 해당 기간 동안 탈퇴를 요청 할 수 없습니다.

                                            제 7 조 (회원ID 부여 및 변경)

                                            ①도서관은 회원에 대하여 도서관의 약관 및 이용 규정에 정하는 바에 따라 회원ID를 부여할 수 있습니다.

                                            ②회원ID는 원칙적으로 변경이 불가능하므로 부득이한 사유로 인하여 변경하고자 하는 경우에는 탈퇴하고 변경하고자 하는 회원ID로 재가입해야 합니다. 다만, 사이트의 기존회원이 통합회원으로 전환 시 기존회원ID가 이미 통합회원 ID로 사용되고 있는 경우에는 기존회원ID는 변경되어야만 합니다.

                                            ③탈퇴 등으로 개인정보 보관기간이 만료된 ID는 재사용할 수 없습니다. 다만, 만료된 ID를 재사용하려는 이용자가 이를 사용했던 이용자임을 객관적으로 입증하는 경우 재사용을 허용할 수 있습니다.

                                            ④회원ID가 부적절하거나 본 약관 제 17조의 내용을 위반하는 경우 도서관의 판단에 따라 ID 부여를 취소할 수 있으며, 신청자에게 변경 또는 삭제를 요청할 수 있습니다.

                                            ⑤회원ID 및 비밀번호의 관리책임은 회원에게 있습니다. 이를 소홀히 관리하여 발생하는 서비스 이용 상의 손해 또는 제3자에 의한 부정 이용 등에 대한 책임은 모두 회원에게 있으며 도서관은 그에 대해 책임지지 않습니다.

                                            ⑥기타 회원 개인정보 관리 및 변경 등에 관한 사항은 서비스별 안내에 정하는 바에 의합니다.

                                            제 8 조 (이용 신청의 승낙과 제한)

                                            ①도서관은 이용신청에 대하여 업무 수행 상 또는 기술상 지장이 없는 경우에 접수 순서에 따라 서비스 이용을 승낙하는 것을 원칙으로 합니다.

                                            ②이용자의 신청내용이 도서관에서 규정한 제반사항을 위반한 경우 승낙을 보류할 수 있습니다.

                                            ③도서관은 서비스 이용신청이 다음 각 호의 하나에 해당하는 경우에는 그 신청에 대하여 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다

                                            1.사이트 설비의 여유가 없는 경우

                                            2.사이트의 기술상 지장이 있는 경우

                                            3.기타 도서관의 귀책사유로 이용승낙이 곤란한 경우

                                            ④도서관은 이용 신청자가 만 16세 미만일 경우(국립어린이청소년도서관, 국립세종도서관 제외)도서관 이용서비스가 제한됩니다. 다만, 도서관이 정한 별도의 규정에 따라 도서관장이 필요하다고 인정하는 자는 예외로 할 수 있습니다.

                                            ⑤도서관은 회원 가입 절차 완료 이후 제3항 각 호에 따른 사유가 발견된 경우 이용 승낙을 철회할 수 있습니다.

                                            ⑥통합회원의 개인정보는 개인정보 보호법 및 공공기록물 관리에 관한 법률에 따른 보유기간을 준수하며, 이용자의 마지막 서비스 이용일로부터 5년간 보관됩니다.

                                            ⑦2년 동안 사용이 없을 경우 휴면회원으로 전환되며 보유기간동안 별도의 요청이 없을 경우 이용이 중지됩니다. 단, 대출중인 자료가 있는 회원은 휴면회원으로 전환하지 않습니다.

                                            제 9 조 (개인정보의 보호 및 사용)

                                            ①도서관은 회원정보를 "개인정보보호법"에 의해 보호합니다.

                                            ②회원의 개인정보는 본인만이 열람/수정/삭제할 수 있고, 비밀번호 등이 타인에게 노출되지 않도록 철저히 관리 해야하며, 본인의 회원ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 도서관에 신고하여야 합니다. 신고를 하지 않아 발생하는 모든 책임은 회원 본인에게 있습니다. 또한 회원이 개인을 식별할수 있는 ID를 사용하여 발생하는 문제에 대한 모든 책임도 회원 본인에게 있습니다.

                                            ③도서관은 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 다만, 다음과 같은 경우에 법이 허용하는 범위 내에서 회원의 개인정보를 제3자에게 제공할 수 있습니다.

                                            1.수사기관이나 기타 다른 정부기관으로부터 정보제공을 요청 받은 경우

                                            2.회원의 법령 또는 약관의 위반을 포함하여 부정행위 확인 등의 정보보호 업무를 위해 필요한 경우

                                            3.기타 법률에 의해 요구되는 경우

                                            제 3 장 서비스의 이용
                                            제 10조 (통합 회원제)

                                            ①회원은 사이트 및 서비스를 단일 회원ID와 비밀번호로 이용하실 수 있습니다.

                                            ②도서관은 일부 사이트의 특정 서비스를 제공하기 위해 회원에게 별도 또는 추가적인 가입절차를 요청할 수 있으며, 회원이 이러한 특정 서비스를 이용할 경우 해당 사이트 또는 서비스의 이용 약관, 규정 또는 세칙 등이 본 약관보다 우선 적용됩니다.

                                            ③도서관은 회원이 사이트 및 서비스를 쉽게 이용할 수 있도록 회원ID를 포함한 통합회원제를 관리할 수 있고, 사이트 및 서비스를 개선 또는 변경할 수 있습니다.

                                            ④회원의 최초 서비스 이용 신청 이후 도서관의 사이트가 늘어나거나 줄어든 경우에도 별도 약관으로 명시하지 않는 한 본 약관이 적용되며, 도서관은 신규 사이트 또는 서비스 개시에 대한 정보를 사이트에 공지하거나 회원의 전자우편으로 알릴 수 있습니다.

                                            제 11 조 (서비스의 제공)

                                            ①도서관은 회원의 이용신청을 승낙한 때부터 서비스를 개시합니다. 단, 일부 서비스의 경우에는 지정된 일자부터 서비스를 개시합니다.

                                            ②온라인 서비스(사이트 이용)는 도서관의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다. 단, 도서관은 시스템 정기점검, 증설 및 교체를 위해 도서관이 정한 날이나 시간에 서비스를 일시 중단할 수 있으며, 예정되어 있는 작업으로 인한 서비스 일시 중단은 도서관 홈페이지를 통해 사전에 공지합니다.

                                            ③오프라인 서비스(도서관 이용)의 운영시간 및 휴관일은 국립중앙도서관과 그 소속도서관의 홈페이지를 통해 공지합니다.

                                            ④도서관은 긴급한 시스템 점검, 증설 및 교체, 설비의 장애, 서비스 이용의 폭주, 국가비상사태, 정전 등 부득이한 사유가 발생한 경우 사전 예고 없이 일시적으로 서비스의 전부 또는 일부를 중단할 수 있습니다.

                                            ⑤도서관은 서비스 개편 등 서비스 운영 상 필요한 경우 회원에게 사전 예고 후 서비스의 전부 또는 일부의 제공을 중단할 수 있습니다.

                                            제 12 조 (서비스의 변경)

                                            ①도서관은 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.

                                            ②서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전 7일 이상 해당 서비스 초기화면에 게시하여야 합니다.

                                            ③도서관은 정책 및 운영의 필요에 따라 사전공지를 통해 무료로 제공되는 서비스의 일부 또는 전부를 수정, 중단, 변경할 수 있으며, 이용회원에게는 별도의 보상을 하지 않습니다.

                                            제 13 조 (게시물의 관리)

                                            ①회원이 등록한 게시물 등으로 인하여 본인 또는 타인에게 손해나 기타 문제가 발생하는 경우 전적으로 회원에게 책임이 있으며, 도서관은 별도의 책임을 지지 않습니다.

                                            ②도서관은 다음 각 호의 하나에 해당하는 경우 게시물 등을 회원의 사전 동의 없이, 게시 중단, 수정, 삭제, 등록 거부 등의 조치를 취할 수 있습니다.

                                            1.본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우

                                            2.다른 회원 또는 제 3자에게 심한 모욕을 주거나 명예를 손상시키는 내용인 경우

                                            3.공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크시키는 경우

                                            4.불법복제 또는 해킹을 조장하는 내용인 경우

                                            5.영리를 목적으로 하는 광고일 경우

                                            6.범죄와 결부된다고 객관적으로 인정되는 내용일 경우

                                            7.다른 이용자 또는 제 3자의 저작권 등 기타 권리를 침해하는 내용인 경우

                                            8.기타 관계법령에 위배된다고 판단되는 경우

                                            ③도서관은 게시물 등에 대하여 제 3자로부터 명예훼손, 지적재산권 등의 권리 침해를 이유로 게시중단 요청을 받은 경우 이를 임시로 게시중단(전송중단)할 수 있으며, 게시중단 요청자와 게시물 등록자 간에 소송, 합의 기타 이에 준하는 관련기관의 결정 등이 이루어져 도서관에 접수된 경우 이에 따릅니다.

                                            ④해당 게시물 등에 대해 임시게시 중단이 된 경우, 게시물을 등록한 회원은 재게시(전송재개)를 도서관에 요청할 수 있으며, 게시 중단일로부터 3개월 내에 재게시를 요청하지 아니한 경우 도서관은 이를 삭제할 수 있습니다.

                                            제 14 조 (게시물의 저작권)

                                            ①서비스에 대한 저작권 및 지적재산권은 도서관에 귀속됩니다.

                                            ②회원이 서비스 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다. 단, 도서관은 서비스의 운영, 전시, 전송, 배포, 홍보의 목적으로 회원의 별도 허락 없이 무상으로 저작권법에 규정하는 공정한 관행에 합치되도록 합리적인 범위 내에서 다음과 같이 회원이 등록한 게시물을 사용할 수 있습니다.

                                            1.서비스 내에서 회원 게시물의 복제, 수정, 개조, 전시, 전송, 배포 및 저작물의 원래 속성을 해치지 않는 범위 내에서의 편집 저작물의 작성

                                            2.공공기관, 민간기관, 포털, 방송사, 통신사 등 서비스 연계기관에게 회원의 게시물 내용을 제공, 전시 혹은 홍보

                                            ③도서관은 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우, 전화, 팩스, 전자우편 등의 방법을 통해 사전에 회원의 동의를 얻어야 합니다. 회원은 언제든지 고객센터를 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.

                                            ④회원의 게시물이 타인의 저작권을 침해함으로써 발생하는 민사, 형사상의 책임은 전적으로 회원이 부담하여야 합니다.

                                            제 15 조 (서비스 이용제한)

                                            ①도서관은 회원이 서비스 이용내용에 있어서 본 약관 제 17조의 내용을 위반하거나, 다음 각 호의 하나에 해당하는 경우 서비스 이용제한, 이용계약 해지 및 기타 해당 조치를 할 수 있습니다.

                                            1.회원정보에 부정한 내용을 등록하거나, 타인의 회원ID, 비밀번호, 기타 개인정보를 도용 또는 타인과 거래하거나 제공하는 행위

                                            2.공공질서 위반 및 저속, 음란한 내용 전송, 게시, 전자우편, 기타의 방법으로 타인에게 유포하는 행위

                                            3.타인을 일시적 또는 지속적으로 희롱, 위협, 고통 불편을 주는 행위

                                            4.도서관으로부터 특별한 권리를 부여 받지 않고 도서관이 제공하는 프로그램,사이트, 또는 게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위

                                            5.도서관의 운영진, 직원 또는 관계자를 사칭하거나 고의로 정상적인 서비스 운영을 방해하는 행위

                                            6.방송통신심의위원회 등 관련 공공기관의 시정 요구가 있는 경우

                                            7.약관을 포함하여 도서관이 정한 제반 규정을 위반하거나 범죄와 결부된다고 객관적으로 판단되는 등 제반 법령을 위반하는 행위

                                            제 4 장 계약 당사자의 의무 및 책임
                                            제 16 조 (도서관의 의무)

                                            ①도서관은 회원이 희망한 서비스 제공 개시일에 특별한 사정이 없는 한 서비스를 이용할 수 있도록 하여야 합니다.

                                            ②도서관은 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구해야 합니다.

                                            ③도서관은 회원이 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위한 보안시스템을 구축하며 개인정보 보호정책을 공시하고 준수하여야 합니다.

                                            ④도서관은 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 적절한 절차를 거쳐 즉시 처리하여야 합니다. 다만, 즉시 처리가 곤란한 경우는 회원에게 그 사유와 처리일정을 통보하여야 합니다.

                                            ⑤도서관은 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.

                                            제 17 조 (회원의 의무)

                                            ①회원은 회원가입 신청 또는 회원정보 변경 시 모든 사항을 사실에 근거하여 본인의 정확한 정보로 작성하여야 하며, 허위 또는 타인의 정보를 등록할 경우 이와 관련된 모든 권리를 주장할 수 없습니다.

                                            ②회원은 관계 법령, 본 약관의 규정, 이용 안내 및 도서관이 공지한 주의사항, 도서관이 통지하는 사항 등을 준수하여야 하며, 기타 도서관의 업무에 방해가 되는 행위, 도서관의 명예를 손상시키는 행위, 타인에게 피해를 주는 행위를 해서는 안됩니다.

                                            ③회원은 본인의 회원ID와 비밀번호를 제3자에게 이용하게 해서는 안되며, 이용계약사항이 변경된 경우에 해당 절차를 거쳐 이를 도서관에 즉시 알려야 합니다.

                                            ④회원은 도서관의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없으며, 그 영리행위의 결과에 대해 도서관은 책임을 지지 않습니다. 또한 회원은 이와 같은 영리행위로 도서관이 손해를 입은 경우, 회원은 도서관에 대해 손해배상 의무를 지며, 도서관은 해당 회원에 대해 서비스 이용제한 및 적법한 절차를 거쳐 손해배상 등을 청구할 수 있습니다.

                                            ⑤회원은 도서관의 명시적 동의가 없는 한 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며 이를 담보로 제공할 수 없습니다.

                                            ⑥회원은 도서관 서비스를 이용하여 얻은 정보를 도서관의 사전승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.

                                            ⑦회원은 도서관 및 제 3자의 지적 재산권을 포함한 제반 권리를 침해하거나 다음 각 호의 행위를 하여서는 안됩니다.

                                            1.다른 회원의 ID를 부정 사용하는 행위

                                            2.범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위

                                            3.선량한 풍속, 기타 사회질서를 해하는 행위

                                            4.타인의 명예를 훼손하거나 모욕하는 행위

                                            5.타인의 지적재산권 등의 권리를 침해하는 행위

                                            6.해킹행위 또는 컴퓨터바이러스의 유포행위

                                            7.타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위

                                            8.서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위

                                            제 5 장 손해배상 및 기타사항
                                            제 18 조 (손해배상)

                                            도서관과 회원은 서비스 이용과 관련하여 고의 또는 과실로 상대방에게 손해를 끼친 경우에는 이를 배상하여야 합니다.

                                            제 19 조 (면책조항)

                                            ①도서관은 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.

                                            ②도서관은 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.

                                            ③도서관은 회원의 컴퓨터 오류에 의해 손해가 발생한 경우, 또는 회원이 신상정보 및 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우 책임을 지지 않습니다.

                                            ④도서관은 회원이 서비스를 이용하여 기대하는 결과를 얻지 못하거나 상실한 것에 대하여 책임을 지지 않으며, 서비스를 이용하면서 얻은 자료로 인한 손해에 대하여 책임을 지지 않습니다.

                                            ⑤도서관은 회원이 서비스에 게재한 각종 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 대하여 책임을 지지 않으며, 회원 상호간 및 회원과 제 3자 상호 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없고, 이로 인한 손해를 배상할 책임도 없습니다.

                                            ⑥도서관은 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 할 의무가 없으며, 그 결과에 대한 책임을 지지 아니합니다.

                                            제 20 조 (관할 법원)

                                            본 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 대한민국 서울중앙지방법원을 관할 법원으로 합니다.

                                            부칙

                                            1. 본 약관은 2022년 10월 21일부터 적용됩니다.

                                            부칙

                                            2. 본 약관은 2021년 12월 15일부터 적용됩니다.

                                            부칙

                                            1. 본 약관은 2020년 9월 10일부터 적용됩니다.

                                            부칙

                                            1. 본 약관은 2013년 12월 12일부터 적용됩니다.</span>
                                </div>
                                <div className="check-box">
                                    <input type="radio" name='checkbox1-1' id='checkbox1-1' value={'동의합니다'} onChange={onChangeAgreed1}/>
                                    <label htmlFor="checkbox1-1"><em>(필수항목)</em>동의합니다</label>
                                    <input type="radio" name='checkbox1-2' id='checkbox1-2' value={'동의 하지 않습니다.'} onChange={onChangeAgreed1}/>
                                    <label htmlFor="checkbox1-2">동의 하지 않습니다.</label>
                                </div>
                            </div>
                            <div className="section3">
                                <div className="title">
                                    <h2>개인정보 수집 및 이용에 관한 안내(필수)</h2>
                                </div>
                                <div className="text-box">
                                    <span>1. 수집하는 개인정보 항목
                                            국립중앙도서관은 회원가입, 원활한 고객상담, 각종 서비스 등 기본적인 서비스 제공을 위해 회원가입 시 아래와 같은 개인정보를 수집하고 있습니다.

                                            가. 필수항목: ID, 비밀번호, 성명, E-Mail, 연락처(또는 핸드폰), 생년월일, 주소, 법정대리인 성명(만14세 미만 회원의 경우)

                                            나. 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
                                            (IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록)


                                            2. 개인정보의 수집 및 이용 목적

                                            가. 서비스 제공에 관한 업무 이행

                                            - 홈페이지 회원에게 정보 서비스 제공

                                            나. 회원관리

                                            - 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 가입 의사 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만 처리 등 민원처리, 고지사항 전달


                                            3. 개인정보의 보유 및 이용기간

                                            회원 이용자의 개인정보는 개인정보보호법 및 공공기록물법에 따라 마지막 이용일(도서관 방문, 홈페이지 로그인)로부터 5년간 보관되며, 그 이후, 관계법령의 절차에 따라 파기합니다.
                                            다만, 다음과 같은 경우에 개인정보의 처리 및 이용이 중지됩니다.

                                            가. 휴면회원 전환(마지막 이용일로부터 2년간 미사용)시점부터 계정 활성화 또는 파기 시까지

                                            나. 회원 탈퇴 요청 시점부터 개인정보 파기시까지


                                            4. 동의 거부권 및 동의 거부에 따른 불이익

                                            가입자는 개인정보 수집·이용에 대하여 거부할 수 있는 권리가 있습니다. 단, 이에 대한 동의를 거부할 경우, 회원가입이 불가능합니다.</span>
                                </div>
                                <div className="check-box">
                                    <input type="radio" name='checkbox2-1' id='checkbox2-1' value={'동의합니다'} onChange={onChangeAgreed2}/>
                                    <label htmlFor="checkbox2-1"><em>(필수항목)</em>동의합니다</label>
                                    <input type="radio" name='checkbox2-2' id='checkbox2-2' value={'동의 하지 않습니다.'} onChange={onChangeAgreed2}/>
                                    <label htmlFor="checkbox2-2">동의 하지 않습니다.</label>
                                </div>
                            </div>
                            <div className="section4">
                                <div className="title">
                                    <h2>개인정보 수집 및 이용에 관한 안내(선택)</h2>
                                </div>
                                <div className="text-box">
                                    <span>1. 수집하는 개인정보 항목
                                            국립중앙도서관은 맞춤형 서비스 및 도서관 통계 분석을 위해 아래와 같은 항목은 선택정보로 별도의 동의를 받아 수집합니다.

                                            - 선택항목 : 성별, SMS 통보 여부, 연락처 중 휴대전화번호, 소속기관, 이용 목적, 관심분야, 전자우편 구독 수신 여부, 학교정보, 책바다 소속도서관, 소속도서관 이용증 번호


                                            2. 개인정보의 수집 및 이용 목적

                                            가. 인구통계학적 통계 : 성별

                                            나. 알림서비스 제공 : SMS 통보 여부, 휴대전화번호

                                            다. 정책정보 서비스 제공 : 소속기관

                                            라. 이용 도서관 통계 분석 및 맞춤형 서비스 제공 : 이용 목적, 관심 분야, 전자우편 구독 수신 여부

                                            마. 국립어린이청소년도서관 청소년프로그램 운영 : 학교정보

                                            바. 책바다 서비스 제공 : 휴대전화번호, 책바다 소속도서관, 소속도서관 이용증 번호


                                            3. 개인정보의 보유 및 이용기간

                                            회원 이용자의 개인정보는 개인정보보호법 및 공공기록물법에 따라 마지막 이용일(도서관 방문, 홈페이지 로그인)로부터 5년간 보관되며, 그 이후, 관계법령의 절차에 따라 파기합니다.
                                            다만, 다음과 같은 경우에 개인정보의 처리 및 이용이 중지됩니다.

                                            가. 휴면회원 전환(마지막 이용일로부터 2년간 미사용)시점부터 계정 활성화 또는 파기 시까지

                                            나. 회원 탈퇴 요청 시점부터 개인정보 파기시까지


                                            4. 동의 거부권 및 동의 거부에 따른 불이익

                                            선택항목의 수집 동의를 거부하더라도 도서관 서비스를 이용할 수 있습니다. 단, 일부 서비스는 개인정보의 수집 및 이용 목적에 명시된 바에 따라, 해당 항목 수집에 동의하여야 이용 가능합니다.</span>
                                </div>
                                <div className="check-box">
                                    <input type="radio" name='checkbox3-1' id='checkbox3-1' value={'동의합니다'}/>
                                    <label htmlFor="checkbox3-1">동의합니다</label>
                                    <input type="radio" name='checkbox3-2' id='checkbox3-2' value={'동의 하지 않습니다.'}/>
                                    <label htmlFor="checkbox3-2">동의 하지 않습니다.</label>
                                </div>
                            </div>
                            <div className="section5">
                                <div className="button-box">
                                    <button className='disagree' onClick={onClickDisagree}>동의 하지 않습니다</button>
                                    <button className='agreement' onClick={onClickAgreement}>동의 합니다</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    state.isSignUp3 && (
                        <div className="main3">
                            <div className="section1">
                                <ul>
                                    <li><span>1</span><p>개인정보 수집 및 이용동의</p></li>
                                    <li><span>2</span><p>본인인증</p></li>
                                    <li><span>3</span><p>가입정보 입력</p></li>
                                    <li><span>4</span><p>가입 완료</p></li>
                                </ul>
                                <div className="txt-box">
                                    <h2>반드시 약관 내용을 읽어 보신 후 가입하시기 바랍니다. 통합회원 약관 및 개인정보 수집,이용에 동의해주셔야 가입이 가능합니다.</h2>
                                </div>
                            </div>
                            <div className="section2">
                                <div className="title">
                                    <h2>회원이름 입력</h2>
                                </div>
                                <div className="input-box">
                                    <input type="text" id='userName' name='userName' value={state.userName} onChange={onChangeName}/>
                                </div>
                            </div>
                            <div className="section3">
                                <div className="title">
                                    <h2>생년월일 입력</h2>
                                </div>
                                <div className="input-box">
                                    <input type="text" id='userBirth' name='userBirth' value={state.userBirth} onChange={onChangeuserBirth}/>
                                </div>
                            </div>
                            <div className="section4">
                                <div className="button-box">
                                    <button className='certification' onClick={onClickCertification}>본인인증 완료</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    state.isSignUp4 && (
                        <div className="main4">
                            <form onSubmit={onSubmitUserSingUp}>
                                <div className="section1">
                                    <ul>
                                        <li><span>1</span><p>개인정보 수집 및 이용동의</p></li>
                                        <li><span>2</span><p>본인인증</p></li>
                                        <li><span>3</span><p>가입정보 입력</p></li>
                                        <li><span>4</span><p>가입 완료</p></li>
                                    </ul>
                                    <div className="txt-box">
                                        <h2>기본정보 입력</h2>
                                        <h3>* 표시는 필수 입력 사항입니다.</h3>
                                    </div>
                                </div>
                                <div className="section2">
                                    <ul>
                                        <li className='signUpForm1'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>회원유형</span>
                                            </div>
                                            <div className="right">
                                                <input type="radio" name='userType' id='userType1'value={'일반회원'} onChange={onChangeUserType}/>
                                                <label htmlFor="userType1">일반회원</label>
                                                <input type="radio" name='userType' id='userType2' value={'공무원'} onChange={onChangeUserType}/>
                                                <label htmlFor="userType2">공무원</label>
                                                <input type="radio" name='userType' id='userType3' value={'공공기관'} onChange={onChangeUserType}/>
                                                <label htmlFor="userType3">공공기관(일부 정부부처 포함)</label>
                                            </div>
                                        </li>
                                        <li className='signUpForm2'>
                                            <div className="left">
                                                <p></p>
                                                <span>회원인증</span>
                                            </div>
                                            <div className="right">
                                                <span>※ 공무원인 경우는 GPKI인증 또는 이메일 인증을 받으셔야 합니다. 아래 인증 방법 중 하나를 선택해주세요.</span>
                                                <span>※ GPKI인증은 인터넷 익스플로러 브라우저에서만 진행이 가능합니다.</span>
                                                <span>※ 정책회원 인증 관련 문의: 044-900-9062 이메일: napi@korea.kr</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm3'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>회원 ID</span>
                                            </div>
                                            <div className="right">
                                                <input type="text" name='userId' id='userId' value={state.userId} onChange={onChangeUserId}/>
                                                <button onClick={onClickIdCheck}>중복확인</button>
                                                <p>*</p>
                                                <span> 6~12자리의 영문 또는 숫자 혼용, 특수문자 제외</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm4'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>비밀번호</span>
                                            </div>
                                            <div className="right">
                                                <input type="password" name='userPw1' id='userPw1' value={state.userPw1} onChange={onChangeUserPw1}/>
                                                <p>*</p>
                                                <span> 10~16자리 영문/숫자 또는 영문/숫자/특수문자[!@#$%^&*()]혼용</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm5'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>비밀번호 확인</span>
                                            </div>
                                            <div className="right">
                                                <input type="password" name='userPw2' id='userPw2' value={state.userPw2} onChange={onChangeUserPw2}/>
                                                <p>*</p>
                                                <span>비밀번호 동일 입력</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm6'>
                                            <div className="left">
                                                <p></p>
                                                <span>성명</span>
                                            </div>
                                            <div className="right">
                                                <span>{state.userName}</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm7'>
                                            <div className="left">
                                                <p></p>
                                                <span>생년월일</span>
                                            </div>
                                            <div className="right">
                                                <span>{state.userBirth}</span>
                                            </div>
                                        </li>
                                        <li className='signUpForm8'>
                                            <div className="left">
                                                <p></p>
                                                <span>성별</span>
                                            </div>
                                            <div className="right">
                                                <input type="radio" name='userGender' id='userGender1' value={'남'} onChange={onChangeGender}/>
                                                <label htmlFor="userGender1">남</label>
                                                <input type="radio" name='userGender' id='userGender2' value={'여'} onChange={onChangeGender}/>
                                                <label htmlFor="userGender2">여</label>
                                                <input type="radio" name='userGender' id='userGender3' value={'동의안함'} onChange={onChangeGender}/>
                                                <label htmlFor="userGender3">동의안함</label>
                                            </div>
                                        </li>
                                        <li className='signUpForm9'>
                                        <div className="left">
                                                <p>*</p>
                                                <span>연락처</span>
                                            </div>
                                            <div className="right">
                                                <div className="input-box">
                                                    <input type="text" name='userHp1' id='userHp1' value={state.userHp1} onChange={onChangeHp1}/>
                                                    <input type="text" name='userHp2' id='userHp2' value={state.userHp2} onChange={onChangeHp2}/>
                                                    <input type="text" name='userHp3' id='userHp3' value={state.userHp3} onChange={onChangeHp3}/>
                                                </div>
                                                <div className="info-box">
                                                    <span>* 국가상호대차서비스 선택시 휴대폰번호 입력 후 인증을 수행해야 합니다.</span>
                                                    <span>* 인증번호는 카카오톡 알림톡으로 발송되며, 카카오톡이 설치되지 않은 휴대폰의 경우 일반 문자메세지(SMS)로 발송됩니다.</span>
                                                </div>
                                                <div className="button-box">
                                                    <button className='hpingng'>인증번호 받기</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='signUpForm10'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>이메일</span>
                                            </div>
                                            <div className="right">
                                                <div className="input-box">
                                                    <input type="text" name='userEmail' id='userEmail1'value={state.userEmail1} onChange={onChangeEmail1}/>
                                                    <i>@</i>
                                                    {
                                                        state.isEmail &&(
                                                            <input type="text" name='userEmail' id='userEmail2' value={state.userEmail2} onChange={onChangeEmail2}/>
                                                        )                 
                                                    }
                                                    <select name="userEmail" id="userEmail3" onChange={onChangeEmail3}>
                                                        <option value="*" selected>선택하세요</option>
                                                        <option value="**" >직접입력</option>
                                                        <option value="naver.com" >네이버</option>
                                                        <option value="gmail.com" >G메일</option>
                                                        <option value="hanmail.com" >한메일</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='signUpForm11'>
                                            <div className="left">
                                                <p>*</p>
                                                <span>주소</span>
                                            </div>
                                            <div className="right">
                                                <div className="row1">
                                                    <button className='addressBtn' onClick={onClickAddress}>주소검색</button>
                                                    <input type="text" name='userAddress' id='userAddress1' value={state.userAddress1} disabled/>
                                                </div>
                                                <div className="row2">
                                                    <input type="text" name='userAddress' id='userAddress2' value={state.userAddress2} disabled/>
                                                </div>
                                                <div className="row3">
                                                    <input type="text" name='userAddress' id='userAddress3' value={state.userAddress3} onChange={onChangeAddress}/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='signUpForm12'>
                                            <div className="left">
                                                <p></p>
                                                <span>SMS통보여부(선택)</span>
                                            </div>
                                            <div className="right">
                                                <div className="input-box">
                                                    <input type="checkbox" id='SMSSelect' name='SMSSelect' value={'SMS 통보 신청'} onChange={onChangeCheckbox}/>
                                                    <label htmlFor="SMSSelect">SMS 통보 신청</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section3">
                                    <button className='signUp-btn' type='submit'>회원가입 신청</button>
                                </div>
                            </form>
                        </div>
                    )
                }
                {
                    state.isSignUp5 && (
                        <div className="main5">
                            <div className="row1">
                                <span>{state.userName}님</span>
                                <p>회원가입을 축하합니다.</p>
                            </div>
                            <div className="row2">
                                <button onClick={onClickFin}>회원가입 완료하기</button>
                            </div>
                        </div>
                    )  
                }
                <div className="foodter">
                    <div className="content">
                        <div className="left">
                            <div className="logo">
                                <span></span>
                            </div>
                        </div>
                        <div className="rignt">
                            <h2>회원가입, 아이디/비밀번호 분실 등 관련문의 : 02-590-0708 / 02-590-6258</h2>
                            <h3>서울시 서초구 반포대로 201(반포동) (우)06579 문의전화 02-590-0500 팩스 02-590-0530</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};