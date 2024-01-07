import React from 'react';

export default function Sub1DataListUpdateComponent(){

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

    return (
        <div id='dataListUpdate' className='registerData'>
            <section id='section1'>
                <div className="container">
                    <div className="title">
                        <h2>자료 수정하기</h2>
                    </div>
                    <div className="content">
                        <form action="" onSubmit={'onSubmitRegisterData'}>
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
                                                    onChange={'onChangeBookType'}
                                                /> 일반도서</label>
                                            <label htmlFor="bookType2">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType2'
                                                    value={'잡지/학술지'}
                                                    checked={state.bookType.includes('잡지/학술지')}
                                                    onChange={'onChangeBookType'}
                                                /> 잡지/학술지</label>
                                            <label htmlFor="bookType3">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType3'
                                                    value={'학위논문'}
                                                    checked={state.bookType.includes('학위논문')}
                                                    onChange={'onChangeBookType'}
                                                /> 학위논문</label>
                                            <label htmlFor="bookType4">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType4'
                                                    value={'디지털신문'}
                                                    checked={state.bookType.includes('디지털신문')}
                                                    onChange={'onChangeBookType'}
                                                /> 디지털신문</label>
                                            <label htmlFor="bookType5">
                                                <input
                                                    type="radio"
                                                    name='bookType'
                                                    id='bookType5'
                                                    value={'멀티미디어/비도서'}
                                                    checked={state.bookType.includes('멀티미디어/비도서')}
                                                    onChange={'onChangeBookType'}
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
                                            <select name="bookSubject" id="bookSubject" onChange={'onChangeBookSubject'}>
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
                                            <input type="text" name='bookTitle' id='bookTitle' onChange={'onChangeBookTitle'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저자</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookWriter' id='bookWriter' onChange={'onChangeBookWriter'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>주기사항</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookjuki' id='bookjuki' onChange={'onChangeBookJuki'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행년도</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookYear' id='bookYear' onChange={'onChangeBookYear'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>발행기관</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPublisher' id='bookPublisher' onChange={'onChangeBookPublisher'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>분류기호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookSortNum' id='bookSortNum' onChange={'onChangeBookSortNum'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>저작번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookCopyright' id='bookCopyright' onChange={'onChangeBookCopyright'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>표준번호</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookStandardNum' id='bookStandardNum' onChange={'onChangeBookStandardNum'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>가격</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPrice' id='bookPrice' onChange={'onChangeBookPrice'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>페이지</h4>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" name='bookPage' id='bookPage' onChange={'onChangeBookPage'}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list">
                                        <div className="label-box">
                                            <h4>언어</h4>
                                        </div>
                                        <div className="input-box">
                                            <select name="bookLanguage" id="bookLanguage" onChange={'onChangeBookLanguage'}>
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
                                                    onChange={'onChangeBookStore'}
                                                /> 온라인</label>
                                            <label htmlFor="bookStoreOffline">
                                                <input
                                                    type="radio"
                                                    name='bookStore'
                                                    id='bookStoreOffline'
                                                    value={'오프라인'}
                                                    checked={state.bookStore.includes('오프라인')}
                                                    onChange={'onChangeBookStore'}
                                                /> 오프라인</label>
                                            <label htmlFor="bookStoreOnOff">
                                                <input
                                                    type="radio"
                                                    name='bookStore'
                                                    id='bookStoreOnOff'
                                                    value={'온오프라인'}
                                                    checked={state.bookStore.includes('온오프라인')}
                                                    onChange={'onChangeBookStore'}
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
                                                    onChange={'onChangeBookLibrary'}
                                            /> 국회도서관소장자료</label>
                                            <label htmlFor="bookLibraryUni">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryUni'
                                                    value={'대학도서관종합목록'}
                                                    checked={state.bookLibrary.includes('대학도서관종합목록')}
                                                    onChange={'onChangeBookLibrary'}
                                            /> 대학도서관종합목록</label>
                                            <label htmlFor="bookLibraryElse">
                                                <input
                                                    type="checkbox"
                                                    name='bookLibrary'
                                                    id='bookLibraryElse'
                                                    value={'기타도서관'}
                                                    checked={state.bookLibrary.includes('기타도서관')}
                                                    onChange={'onChangeBookLibrary'}
                                            /> 기타도서관</label>
                                            {
                                                state.bookLibrary.includes('기타도서관') && (
                                                    <input
                                                        type="text"
                                                        name='bookLibrary'
                                                        id='bookLibrarySelf'
                                                        className='bookLibrary'
                                                        onChange={'onChangeBookLibrarySelf'}
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
