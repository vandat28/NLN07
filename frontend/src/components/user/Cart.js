import React, { useEffect, useLayoutEffect, useState } from 'react';
import BASE_URL from '../configURL';
import { Link, Route, Routes } from 'react-router-dom';

function Cart() {

    const userCart = JSON.parse(window.localStorage.getItem('cart'));
    const cartCount = JSON.parse(window.localStorage.getItem('Cart'));
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);
    
    useLayoutEffect(() => {
        if(userCart){
            setShow(true);
        }else{
            setShow(false);
        }
    },[])

    useEffect(() => {
        if(userCart){
            setTotal(userCart.reduce((total, item) => {
                total += (item.price * item.quantity)
                return total
            },0))
        }      
    },[])

    return (
        <div className='Cart'>
            <div className='grid wide'>
                <div className='cart-container'>
                    <div className='cart-title'>GIỎ HÀNG CỦA BẠN</div>
                    <div className='cart_product'>
                        <ul className='cart_product-list'>
                            {show && userCart.map((item, i) => (
                                <li className='cart_product-item row'>
                                    <div className='cart_product-img-container col c-2'>
                                        <img className='cart_product-img' src={`${BASE_URL}/uploads/${item.img}`}/>
                                    </div>
                                    <div className='cart_product-information col c-8'>
                                        <div className='cart_product-information-title'>{item.name}</div>
                                        <div className='cart_product-information-desciption'>{item.description}</div>
                                        {/* <div className='cart_product-information-producer'>{item.description}</div> */}
                                        <div className='cart_product-information-price' id={`item${i}`}>{item.price}đ</div>
                                    </div>
                                    <div className='cart_product-quantity col c-2'>
                                        <button className='cart_product-quantity-decrease' onClick={() => {
                                            userCart[i].quantity--;
                                            if(userCart[i].quantity == 0) {
                                                for(let j = i; j < userCart.length; j++) {
                                                    if((j+1) == userCart.length) {
                                                        userCart.length--; break;
                                                    }else {
                                                        userCart[j] = userCart[j+1];
                                                    }
                                                }
                                            }
                                            cartCount.quantity--;
                                            
                                            window.localStorage.setItem("cart", JSON.stringify(userCart));
                                            window.localStorage.setItem("Cart", JSON.stringify(cartCount));
                                            window.location.reload();
                                        }}>-</button>
                                        <input className='cart_product-quantity-current' placeholder={`${item.quantity}`}></input>
                                        <button className='cart_product-quantity-increase' onClick={() => {
                                            userCart[i].quantity++;
                                            cartCount.quantity++;
                                            
                                            window.localStorage.setItem("cart", JSON.stringify(userCart));
                                            window.localStorage.setItem("Cart", JSON.stringify(cartCount));
                                            window.location.reload();
                                        }}>+</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='cart_product-total'>
                        <div className='cart_product-total-title'>Tổng tiền:</div>
                        <div className='cart_product-total-price' style={{color:"red"}}>{total}đ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;