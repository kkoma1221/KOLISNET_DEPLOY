import React from 'react';
import './scss/sub1.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../../reducer/confirmModal';

export default function Sub1CartComponent(){

    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log(selector.cart.cart);
    // console.log(selector.cart.cart.length);

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


    const onClickViewCart=(e, item)=>{
        e.preventDefault();
        // console.log(item);
        navigate('/cartProductView', {state:item});
    }
    
    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="left"></div>
                        <div className="right" id='sub1Cart'>
                            <div className="title">
                                <h2>바구니</h2>
                                <h3>바구니에 담은 도서리스트를 볼 수 있습니다.</h3>
                            </div>
                            <div className="cart">
                                <div className="cart-length">
                                    <p>총 게시물 <strong> {selector.cart.cart.length} </strong> 건</p>
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
                                                selector.cart.cart.length === 0 && (
                                                    <li className='empty'><p>등록된 자료가 없습니다.</p></li>
                                                )
                                            }
                                            {
                                                selector.cart.cart !== '' && (
                                                    selector.cart.cart.map((item, idx)=>{
                                                        let library = JSON.parse(item.bookLibrary);
                                                        return (
                                                            <li key={idx}>
                                                                <div className="row1">
                                                                    <span className='chk-btn'><input type="checkbox" /></span>
                                                                    <span className='book-title' onClick={(e)=>onClickViewCart(e, item)}>
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