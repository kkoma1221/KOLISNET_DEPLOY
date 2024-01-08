import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import axios from 'axios';

export default function Sub1DataListUpdateComponent(){

    const location = useLocation();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        bookType : '',
        bookSubject: '',
        bookTitle: '',
        bookWriter: '',
        bookjuki: '',
        bookYear: 0,
        bookPublisher: '',
        bookSortNum: '',
        bookCopyright: '',
        bookStandardNum: '',
        bookPrice: 0,
        bookPage: 0,
        bookLanguage: '',
        bookStore: '',
        bookLibrarySelf: ''
    });

    const [state2, setState2] = React.useState({
        bookLibrary: []
    });

    React.useEffect(()=>{
        if(location.state.bookTitle!==''){
            // console.log(location.state);
            //console.log(location.state.bookLibrary);
            //console.log(JSON.parse(location.state.bookLibrary));
            let bookLibrary = JSON.parse(location.state.bookLibrary);
            if(location.state.bookOtherLibrary==='true'){
                bookLibrary = [...bookLibrary, '기타도서관'];
            }
            setState({
                ...state,
                bookType: location.state.bookType,
                bookSubject: location.state.bookSubject,
                bookTitle: location.state.bookTitle,
                bookWriter: location.state.bookWriter,
                bookjuki: location.state.bookjuki,
                bookYear: location.state.bookYear,
                bookPublisher: location.state.bookPublisher,
                bookSortNum: location.state.bookSortNum,
                bookCopyright: location.state.bookCopyright,
                bookStandardNum: location.state.bookStandardNum,
                bookPrice: location.state.bookPrice,
                bookPage: location.state.bookPage,
                bookLanguage: location.state.bookLanguage,
                bookStore: location.state.bookStore,
            });
            setState2({
                ...state2,
                bookLibrary: bookLibrary
            });
        }
    },[]);


    const onChangeBookType=(e)=>{
        setState({
            ...state,
            bookType: e.target.value
        });
    }

    const onChangeBookSubject=(e)=>{
        setState({
            ...state,
            bookSubject: e.target.value
        });
    }

    const onChangeBookTitle=(e)=>{
        setState({
            ...state,
            bookTitle: e.target.value
        });
    }

    const onChangeBookWriter=(e)=>{
        setState({
            ...state,
            bookWriter: e.target.value
        });
    }

    const onChangeBookJuki=(e)=>{
        setState({
            ...state,
            bookjuki: e.target.value
        });
    }
    const onChangeBookYear=(e)=>{
        setState({
            ...state,
            bookYear: e.target.value
        });
    }

    const onChangeBookPublisher=(e)=>{
        setState({
            ...state,
            bookPublisher: e.target.value
        });
    }

    const onChangeBookSortNum=(e)=>{
        setState({
            ...state,
            bookSortNum: e.target.value
        });
    }
    
    const onChangeBookStandardNum=(e)=>{
        setState({
            ...state,
            bookStandardNum: e.target.value
        });
    }

    const onChangeBookPrice=(e)=>{
        setState({
            ...state,
            bookPrice: e.target.value
        });
    }

    const onChangeBookPage=(e)=>{
        setState({
            ...state,
            bookPage: e.target.value
        });
    }

    const onChangeBookLanguage=(e)=>{
        setState({
            ...state,
            bookLanguage: e.target.value
        });
    }

    const onChangeBookStore=(e)=>{
        setState({
            ...state,
            bookStore: e.target.value
        });
    }

    const onChangeBookLibrary=(e)=>{
        let bookLibrary = state2.bookLibrary;
        if(e.target.checked){
            bookLibrary = [...state2.bookLibrary, e.target.value];
        }
        else {
            bookLibrary = bookLibrary.filter((item)=>item!==e.target.value);
        }
        setState2({
            ...state2,
            bookLibrary: bookLibrary
        });
    }

    const onChangeBookLibrarySelf=(e)=>{
        setState({
            ...state,
            bookLibrarySelf: e.target.value
        });
    }

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

    const onSubmitUpdateData=(e)=>{
        e.preventDefault();
        if(state.bookType===''){
            confirmModalMethod('자료유형을 선택하세요.');
        }
        else if(state.bookSubject===''){
            confirmModalMethod('주제를 선택하세요.');
        }
        else if(state.bookTitle===''){
            confirmModalMethod('책제목을 입력하세요.');
        }
        else if(state.bookWriter===''){
            confirmModalMethod('저자를 입력하세요.');
        }
        else if(state.bookPublisher===''){
            confirmModalMethod('발행기관을 입력하세요.');
        }
        else if(state.bookSortNum===''){
            confirmModalMethod('분류기호를 입력하세요.');
        }
        else if(state.bookCopyright===''){
            confirmModalMethod('저작번호를 입력하세요.');
        }
        else if(state.bookStandardNum===''){
            confirmModalMethod('표준번호를 입력하세요.');
        }
        else if(state.bookLanguage===''){
            confirmModalMethod('언어를 선택하세요.');
        }
        else if(state.bookStore===''){
            confirmModalMethod('보관방식을 선택하세요.');
        }
        else if(state2.bookLibrary.length<1){
            confirmModalMethod('소장 도서관을 선택하세요.');
        }
        else {
            let bookLibrary = state2.bookLibrary;
            let bookOtherLibrary = '';
            if(bookLibrary.includes('기타도서관')){
                bookOtherLibrary = 'YES';
                bookLibrary.filter((item)=>item!=='기타도서관');
                if(state.bookLibrarySelf!==''){
                    bookLibrary = [...state2.bookLibrary, state.bookLibrarySelf];
                    //console.log(bookLibrary);
                }
            }
            else {
                bookLibrary = state2.bookLibrary;
                bookOtherLibrary = 'NO';
            }
            let formData = new FormData();
            formData.append('bookType', state.bookType);
            formData.append('bookSubject', state.bookSubject);
            formData.append('bookTitle', state.bookTitle);
            formData.append('bookWriter', state.bookWriter);
            formData.append('bookjuki', state.bookjuki);
            formData.append('bookYear', state.bookYear);
            formData.append('bookPublisher', state.bookPublisher);
            formData.append('bookSortNum', state.bookSortNum);
            formData.append('bookCopyright', state.bookCopyright);
            formData.append('bookStandardNum', state.bookStandardNum);
            formData.append('bookPrice', state.bookPrice);
            formData.append('bookPage', state.bookPage);
            formData.append('bookLanguage', state.bookLanguage);
            formData.append('bookStore', state.bookStore);
            formData.append('bookLibrary', JSON.stringify(bookLibrary));
            formData.append('bookOtherLibrary', bookOtherLibrary)
            axios({
                url:'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_register_data_table_update.php',
                method:'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    // console.log(res.data);
                    if(res.data===1){
                        confirmModalMethod('자료를 수정하였습니다.');
                    }
                    else if(res.data === 0){
                        confirmModalMethod('자료 수정하는데 실패하였습니다. 확인 후 다시 시도하세요.');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div id='dataListUpdate' className='registerData'>
            <section id='section1'>
                <div className="container">
                    <div className="title">
                        <h2>자료 수정하기</h2>
                    </div>
                    <div className="content">
                        <form action="" onSubmit={onSubmitUpdateData}>
                            <ul>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>자료유형</h4>
                                        </div>
                                        <div className="input-box">
                                            <label htmlFor="bookType1">
                                                <input 
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType1'
                                                    value={'일반도서'}
                                                    checked={state.bookType.includes('일반도서')}
                                                    onChange={onChangeBookType}
                                                /> 일반도서</label>
                                            <label htmlFor="bookType2">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType2'
                                                    value={'잡지/학술지'}
                                                    checked={state.bookType.includes('잡지/학술지')}
                                                    onChange={onChangeBookType}
                                                /> 잡지/학술지</label>
                                            <label htmlFor="bookType3">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType3'
                                                    value={'학위논문'}
                                                    checked={state.bookType.includes('학위논문')}
                                                    onChange={onChangeBookType}
                                                /> 학위논문</label>
                                            <label htmlFor="bookType4">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType4'
                                                    value={'디지털신문'}
                                                    checked={state.bookType.includes('디지털신문')}
                                                    onChange={onChangeBookType}
                                                /> 디지털신문</label>
                                            <label htmlFor="bookType5">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType5'
                                                    value={'멀티미디어/비도서'}
                                                    checked={state.bookType.includes('멀티미디어/비도서')}
                                                    onChange={onChangeBookType}
                                                /> 멀티미디어/비도서</label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>주제</h4>
                                        </div>
                                        <div className="input-box">
                                            <select name="bookSubject" id="bookSubject" onChange={onChangeBookSubject} value={state.bookSubject}>
                                                <option value="기술과학">기술과학</option>
                                                <option value="문학">문학</option>
                                                <option value="사회과학">사회과학</option>
                                                <option value="순수과학">순수과학</option>
                                                <option value="어학">어학</option>
                                                <option value="역사">역사</option>
                                                <option value="예술">예술</option>
                                                <option value="자연과학">자연과학</option>
                                                <option value="종교">종교</option>
                                                <option value="철학">철학</option>
                                                <option value="총류">총류</option>
                                                <option value="기타">기타</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>책제목</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookTitle' id='bookTitle' onChange={onChangeBookTitle} value={state.bookTitle}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저자</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookWriter' id='bookWriter' value={state.bookWriter} onChange={onChangeBookWriter}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>주기사항</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookjuki' id='bookjuki' value={state.bookjuki} onChange={onChangeBookJuki}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행년도</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookYear' id='bookYear' value={state.bookYear} onChange={onChangeBookYear}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행기관</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPublisher' id='bookPublisher' value={state.bookPublisher} onChange={onChangeBookPublisher}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>분류기호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookSortNum' id='bookSortNum' value={state.bookSortNum} onChange={onChangeBookSortNum}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저작번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookCopyright' id='bookCopyright' value={state.bookCopyright} disabled={true}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>표준번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookStandardNum' id='bookStandardNum' value={state.bookStandardNum} onChange={onChangeBookStandardNum}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>가격</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPrice' id='bookPrice' value={state.bookPrice} onChange={onChangeBookPrice}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>페이지</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPage' id='bookPage' value={state.bookPage} onChange={onChangeBookPage}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>언어</h4>
                                        </div>
                                        <div className="input-box">
                                            <select name="bookLanguage" id="bookLanguage" value={state.bookLanguage} onChange={onChangeBookLanguage}>
                                                <option value="Korean">Korean</option>
                                                <option value="Japanese">Japanese</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="English">English</option>
                                                <option value="Vietnamese">Vietnamese</option>
                                                <option value="Cambodian">Cambodian</option>
                                                <option value="Thai">Thai</option>
                                                <option value="Russian">Russian</option>
                                                <option value="French">French</option>
                                                <option value="Spanish">Spanish</option>
                                                <option value="Italian">Italian</option>
                                                <option value="German">German</option>
                                                <option value="언어불명">언어불명</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>보관</h4>
                                        </div>
                                        <div className="input-box">
                                            <label htmlFor="bookStoreOnline">
                                                <input 
                                                    type="radio"
                                                    name='bookStore'
                                                    id='bookStoreOnline'
                                                    value={'온라인'}
                                                    checked={state.bookStore.includes('온라인')}
                                                    onChange={onChangeBookStore}
                                                /> 온라인</label>
                                            <label htmlFor="bookStoreOffline">
                                                <input
                                                    type="radio"
                                                    name='bookStore'
                                                    id='bookStoreOffline'
                                                    value={'오프라인'}
                                                    checked={state.bookStore.includes('오프라인')}
                                                    onChange={onChangeBookStore}
                                                /> 오프라인</label>
                                            <label htmlFor="bookStoreOnOff">
                                                <input
                                                    type="radio"
                                                    name='bookStore'
                                                    id='bookStoreOnOff'
                                                    value={'온오프라인'}
                                                    checked={state.bookStore.includes('온오프라인')}
                                                    onChange={onChangeBookStore}
                                                /> 온오프라인</label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>소장도서관</h4>
                                        </div>
                                        <div className="input-box">
                                            <label htmlFor="bookLibraryNA">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryNA'
                                                    value={'국회도서관소장자료'}
                                                    checked={state2.bookLibrary.includes('국회도서관소장자료')}
                                                    onChange={onChangeBookLibrary}
                                            /> 국회도서관소장자료</label>
                                            <label htmlFor="bookLibraryUni">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryUni'
                                                    value={'대학도서관종합목록'}
                                                    checked={state2.bookLibrary.includes('대학도서관종합목록')}
                                                    onChange={onChangeBookLibrary}
                                            /> 대학도서관종합목록</label>
                                            <label htmlFor="bookLibraryElse">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryElse'
                                                    value={'기타도서관'}
                                                    checked={state2.bookLibrary.includes('기타도서관')}
                                                    onChange={onChangeBookLibrary}
                                            /> 기타도서관</label>
                                            {
                                                state2.bookLibrary.includes('기타도서관') && (
                                                    <input
                                                        type="text"
                                                        name='bookLibrary'
                                                        id='bookLibrarySelf'
                                                        className='bookLibrary'
                                                        value={state.bookLibrarySelf}
                                                        onChange={onChangeBookLibrarySelf}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="button-box">
                                <button type='submit'>수정하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
