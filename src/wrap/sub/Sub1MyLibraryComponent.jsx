import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sub1MyLibraryComponent(){

    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const onClickViewmyLibrary=(e, item)=>{
        e.preventDefault();
        navigate('/myLibProductView', {state:item});
    }

    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="left" id='myLibrary'>
                            <div className="sub-menu">
                                <ul>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span className='on'>관심목록</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>관심지역설정</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>이용자 TAGS</span></a></li>
                                    <li><a href="!#"><img src="./images/sub/sub1/sub_title_arrow.png" alt="" /><span>오류신고목록</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right" id='sub1Cart'>
                            <div className="title">
                                <h2>관심목록</h2>
                                <h3>내서재에 추가한 도서리스트를 볼 수 있습니다.</h3>
                            </div>
                            <div className="cart">
                                <div className="cart-length">
                                    <p>총 게시물 <strong> {selector.myLibrary.myLibrary.length} </strong> 건</p>
                                </div>
                                <form action="">
                                    <div className="cart-content">
                                        <div className="select-box">
                                            <label htmlFor="">
                                                <input type="checkbox" />
                                            </label>
                                            <button><img src="./images/sub/sub1/btn_cart.png" alt="" /><span>선택항목삭제</span></button>
                                        </div>
                                        <ul>
                                            {
                                                selector.myLibrary.myLibrary.length === 0 && (
                                                    <li className='empty'><p>등록된 자료가 없습니다.</p></li>
                                                )
                                            }
                                            {
                                                selector.myLibrary.myLibrary !== '' && (
                                                    selector.myLibrary.myLibrary.map((item, idx)=>{
                                                        let library = JSON.parse(item.bookLibrary);
                                                        return (
                                                            <li key={idx}>
                                                                <div className="row1">
                                                                    <span className='chk-btn'><input type="checkbox" /></span>
                                                                    <span className='book-title' onClick={(e)=>onClickViewmyLibrary(e, item)}>
                                                                        <a href="!#">{`${item.bookTitle} / ${item.bookWriter}`}</a>
                                                                    </span>
                                                                </div>
                                                                <div className="row2">
                                                                    <ul>
                                                                        <li><h5>{`발행사항 : ${item.bookPublisher} , ${item.bookYear}`}</h5></li>
                                                                        <li><h5>{`분류기호 : ${item.bookSortNum}`}</h5></li>
                                                                        <li><h5>{`소장도서관 : ${library.length}개관`}</h5></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                )
                                            }
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};