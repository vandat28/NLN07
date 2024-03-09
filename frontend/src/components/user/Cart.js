import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Cart() {
    return (
        <div className='Cart'>
            <div className='grid wide'>
                <div className='cart-container'>
                    <div className='cart-title'>GIỎ HÀNG CỦA BẠN</div>
                    <div className='cart_product'>
                        <ul className='cart_product-list'>
                            <li className='cart_product-item row'>
                                <div className='cart_product-img-container col c-2'>
                                    <div className='cart_product-img'></div>
                                </div>
                                <div className='cart_product-information col c-8'>
                                    <div className='cart_product-information-title'>Khẩu Trang</div>
                                    <div className='cart_product-information-desciption'>Được làm từ vải</div>
                                    <div className='cart_product-information-producer'>Hàn Quốc</div>
                                    <div className='cart_product-information-price'>300000đ</div>
                                </div>
                                <div className='cart_product-quantity col c-2'>
                                    <button className='cart_product-quantity-decrease'>-</button>
                                    <input className='cart_product-quantity-current' placeholder='1'></input>
                                    <button className='cart_product-quantity-increase'>+</button>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='cart_product-total'>
                        <div className='cart_product-total-title'>Tổng tiền:</div>
                        <div className='cart_product-total-price' style={{color:"red"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;