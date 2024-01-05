import React from 'react';
import './scss/registerData.scss'
import axios from 'axios';

export default function Sub1RegisterDataComponent(){

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
        bookLibrary: [],
        bookLibrarySelf: ''
    });

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

    const onChangeBookCopyright=(e)=>{
        setState({
            ...state,
            bookCopyright: e.target.value
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
        let bookLibrary = [];
        if(e.target.checked===true){
            bookLibrary = [...state.bookLibrary, e.target.value]
        }
        else {
            bookLibrary = bookLibrary.filter((item)=>item !== e.target.value);
        }
        // console.log(bookLibrary);
        setState({
            ...state,
            bookLibrary: bookLibrary
        });
    }

    const onChangeBookLibrarySelf=(e)=>{
        setState({
            ...state,
            bookLibrarySelf: e.target.value
        });
    }

    const onSubmitRegisterData=(e)=>{
        e.preventDefault();
        if(state.bookType===''){
            alert('');
        }
        else if(state.bookSubject===''){
            alert('');
        }
        else if(state.bookTitle===''){
            alert('');
        }
        else if(state.bookWriter===''){
            alert('');
        }
        else if(state.bookPublisher===''){
            alert('');
        }
        else if(state.bookSortNum===''){
            alert('');
        }
        else if(state.bookCopyright===''){
            alert('');
        }
        else if(state.bookStandardNum===''){
            alert('');
        }
        else if(state.bookLanguage===''){
            alert('');
        }
        else if(state.bookStore===''){
            alert('');
        }
        else if(state.bookLibrary.length<1){
            alert('');
        }
        else {
            let bookLibrary = state.bookLibrary;
            if(bookLibrary.includes('기타도서관')){
                bookLibrary.filter((item)=>item!=='기타도서관');
                if(state.bookLibrarySelf!==''){
                    bookLibrary = [...state.bookLibrary, state.bookLibrarySelf];
                    //console.log(bookLibrary);
                }
                else {
                    bookLibrary = state.bookLibrary;
                }
            }
            else {
                bookLibrary = state.bookLibrary;
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
            formData.append('bookLibrary', bookLibrary);
            axios({
                url:'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_register_date_table_insert.php',
                method:'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    console.log(res.data);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div id='registerData'>
            <section id='section1'>
                <div className="container">
                    <div className="title">
                        <h2>자료등록</h2>
                    </div>
                    <div className="content">
                        <form action="" onSubmit={onSubmitRegisterData}>
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
                                            <select name="bookSubject" id="bookSubject" onChange={onChangeBookSubject}>
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
                                            <input type="text" name='bookTitle' id='bookTitle' onChange={onChangeBookTitle}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저자</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookWriter' id='bookWriter' onChange={onChangeBookWriter}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>주기사항</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookjuki' id='bookjuki' onChange={onChangeBookJuki}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행년도</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookYear' id='bookYear' onChange={onChangeBookYear}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행기관</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPublisher' id='bookPublisher' onChange={onChangeBookPublisher}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>분류기호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookSortNum' id='bookSortNum' onChange={onChangeBookSortNum}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저작번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookCopyright' id='bookCopyright' onChange={onChangeBookCopyright}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>표준번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookStandardNum' id='bookStandardNum' onChange={onChangeBookStandardNum}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>가격</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPrice' id='bookPrice' onChange={onChangeBookPrice}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>페이지</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPage' id='bookPage' onChange={onChangeBookPage}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>언어</h4>
                                        </div>
                                        <div className="input-box">
                                            <select name="bookLanguage" id="bookLanguage" onChange={onChangeBookLanguage}>
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
                                                    checked={state.bookLibrary.includes('국회도서관소장자료')}
                                                    onChange={onChangeBookLibrary}
                                            /> 국회도서관소장자료</label>
                                            <label htmlFor="bookLibraryUni">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryUni'
                                                    value={'대학도서관종합목록'}
                                                    checked={state.bookLibrary.includes('대학도서관종합목록')}
                                                    onChange={onChangeBookLibrary}
                                            /> 대학도서관종합목록</label>
                                            <label htmlFor="bookLibraryElse">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryElse'
                                                    value={'기타도서관'}
                                                    checked={state.bookLibrary.includes('기타도서관')}
                                                    onChange={onChangeBookLibrary}
                                            /> 기타도서관</label>
                                            {
                                                state.bookLibrary.includes('기타도서관') && (
                                                    <input
                                                        type="text"
                                                        name='bookLibrary'
                                                        id='bookLibrarySelf'
                                                        className='bookLibrary'
                                                        onChange={onChangeBookLibrarySelf}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="button-box">
                                <button type='submit'>등록하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
