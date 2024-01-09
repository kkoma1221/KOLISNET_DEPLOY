import React from 'react';
import './scss/sub1.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../../reducer/confirmModal';
import { cartMethod } from '../../reducer/cart';
import axios from 'axios';

export default function Sub1CartComponent(){

    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        bookCheck: [],
        bookCheckAll: 0
    });

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

    React.useEffect(()=>{
        if(selector.cart.cart!==null){
            let bookCheckAll = []
            selector.cart.cart.map((item)=>{
                bookCheckAll = [...bookCheckAll, item.bookCopyright];
            })
            console.log(bookCheckAll);
            setState({
                ...state,
                bookCheckAll: bookCheckAll
            });
        }
    },[selector.cart]);


    const onClickViewCart=(e, item)=>{
        e.preventDefault();
        // console.log(item);
        navigate('/cartProductView', {state:item});
    }

    const onChangeBookCheck=(e)=>{
        let bookCheck = state.bookCheck;
        if(e.target.checked){
            bookCheck = [...bookCheck, e.target.value];
        }
        else {
            bookCheck = bookCheck.filter((item)=>item !== e.target.value);
        }
        setState({
            ...state,
            bookCheck: bookCheck
        });
        
    }

    const onChangeBookCheckAll=(e)=>{
        let bookCheck = [];
        if(e.target.checked){
            bookCheck = state.bookCheckAll;
        }
        else{
            bookCheck = [];
        }
        setState({
            ...state,
            bookCheck: bookCheck
        });
    }

    const cartDBSelect=(아이디)=>{
        let formData = new FormData();
        formData.append('userId', 아이디);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_select.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                //console.log(res.data);
                if(res.data!==null){
                    localStorage.setItem('KOLISNET_CART', JSON.stringify(res.data));
                    dispatch(cartMethod(res.data));
                    // console.log(res.data);
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const cartDeleteMethod=(아이디, item)=>{
        let formData = new FormData();
        formData.append('userId', 아이디);
        formData.append('bookCopyright', item);
        axios({
            url: 'http://kkoma1221.dothome.co.kr/kolisnet/kolisnet_cart_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                // console.log(아이디);
                // console.log(item);
                if(res.data===1){
                    confirmModalMethod('바구니에서 삭제되었습니다.');
                    cartDBSelect(아이디);
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onClickDeleteBtn=(e)=>{
        e.preventDefault();
        let cart = selector.cart.cart;
        if(state.bookCheck.length > 0){
            let imsi = cart.filter((item)=>!state.bookCheck.includes(item.bookCopyright));
            // console.log(imsi);
            dispatch(cartMethod(imsi));
            localStorage.setItem('KOLISNET_CART', JSON.stringify(imsi));

            let res = state.bookCheck.filter((item)=>!state.bookCheck.includes(item));
            setState({
                ...state,
                bookCheck: res,
                bookCheckAll: res
            });
            state.bookCheck.map((item)=>{
                // console.log(item);
                cartDeleteMethod(selector.logInInfo.logInInfo.userId, item)
            })
        }
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
                                    <p>총 게시물 <strong> {selector.cart.cart!==null?selector.cart.cart.length:'0'} </strong> 건</p>
                                </div>
                                <form action="">
                                    <div className="cart-content">
                                        <div className="select-box">
                                            <label htmlFor="">
                                                <input
                                                    type="checkbox" 
                                                    name='bookCheckAll'
                                                    id='bookCheckAll'
                                                    value={'bookCheckAll'}
                                                    checked={state.bookCheck.length===state.bookCheckAll.length}
                                                    onChange={onChangeBookCheckAll}
                                                />
                                            </label>
                                            <button onClick={onClickDeleteBtn}><img src="./images/sub/sub1/btn_cart.png" alt="" /><span>선택항목삭제</span></button>
                                        </div>
                                        <ul>
                                            {
                                                selector.cart.cart === null && (
                                                    <li className='empty'><p>등록된 자료가 없습니다.</p></li>
                                                )
                                            }
                                            {
                                                selector.cart.cart !== null && (
                                                    selector.cart.cart.map((item, idx)=>{
                                                        // let library = JSON.parse(item.bookLibrary);
                                                        // console.log(item.bookLibrary);
                                                        return (
                                                            <li key={idx}>
                                                                <div className="row1">
                                                                    <span className='chk-btn'>
                                                                        <input 
                                                                            type="checkbox"
                                                                            name='bookCheck'
                                                                            id={`bookCheck${idx}`}
                                                                            value={item.bookCopyright}
                                                                            checked={state.bookCheck.includes(item.bookCopyright)}
                                                                            onChange={onChangeBookCheck}/>
                                                                    </span>
                                                                    <span className='book-title' onClick={(e)=>onClickViewCart(e, item)}>
                                                                        <a href="!#">{`${item.bookTitle} / ${item.bookWriter}`}</a>
                                                                    </span>
                                                                </div>
                                                                <div className="row2">
                                                                    <ul>
                                                                        <li><h5>{`발행사항 : ${item.bookPublisher} , ${item.bookYear}`}</h5></li>
                                                                        <li><h5>{`분류기호 : ${item.bookSortNum}`}</h5></li>
                                                                        <li><h5>{`소장도서관 : ${'item.bookLibrary.length'}개관`}</h5></li>
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