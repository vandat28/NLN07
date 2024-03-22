import React, { useEffect, useLayoutEffect, useState } from 'react';
import BASE_URL from '../../configURL';
import { Link, Route, Routes } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//chuyển về tiền vnđ
const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(amount);
};


function Cart() {

    const userCart = JSON.parse(window.localStorage.getItem('cart'));
    const cartCount = JSON.parse(window.localStorage.getItem('Cart'));
    const user = JSON.parse(window.localStorage.getItem('User'));
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);
    const [isOrder, setIsOrder] = useState(false);
    const [isPayment, setIsPayment] = useState(false);

    // Tỷ giá hối đoái VND/USD (ví dụ)
    const exchangeRateVNDtoUSD = 0.000043;



    useLayoutEffect(() => {
        if (userCart) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [])

    useEffect(() => {
        if (userCart) {
            setTotal(userCart.reduce((total, item) => {
                total += (item.price * item.quantity)
                return total
            }, 0))
        }
    }, [])

    const orderProducts = (event) => {
        event.preventDefault();
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        if (cart) {
            const isConfirmed = window.confirm('Vui lòng kiểm tra kỹ giỏ hàng trước khi nhấn "OK" ?');
            if (isConfirmed) {
                fetch(`${BASE_URL}/api/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tongTien: total,
                        tinhTrangThanhToan: 0,
                        maKH: user.id,
                        phuongThucThanhToan: 1,
                        sanPham: cart
                    })
                })
                    .then(response => response.json())
                    .then(result => {
                        // Xử lý kết quả từ server
                        console.log(result);
                        setIsOrder(true)
                    })
                    .catch(error => {
                        // Xử lý lỗi
                        console.error(error);
                    });
                // Gửi dữ liệu đến server, thực hiện các tác vụ cần thiết, vv.
            } else {
                // Thực hiện hành động khi người dùng nhấn "Cancel" hoặc tắt hộp thoại
                // Ví dụ: Không làm gì cả, hoặc hiển thị thông báo khác, vv.
            }
            // Truy cập dữ liệu đã nhập trong formData và xử lý theo yêu cầu của bạn
        } else {
            alert('Giỏ hàng rỗng!!')
        }

    };

    const deleteCart = () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('Cart');
    }
    const handlePayment = () => {
        setIsPayment(true)
    }


    const createOrder = (data, actions) => {
        const price = total * exchangeRateVNDtoUSD
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: price.toFixed(2),
                        currency_code: "USD"
                    }
                }
            ]
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            console.log(details);
            if (details) {
                const cart = JSON.parse(window.localStorage.getItem('cart'));
                fetch(`${BASE_URL}/api/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tongTien: total,
                        tinhTrangThanhToan: 1,
                        maKH: user.id,
                        phuongThucThanhToan: 3,
                        sanPham: cart
                    })
                })
                    .then(response => response.json())
                    .then(result => {
                        // Xử lý kết quả từ server
                        console.log(result);
                        setIsOrder(true)
                    })
                    .catch(error => {
                        // Xử lý lỗi
                        console.error(error);
                    });
            }
        });
    };

    return (
        <div className='Cart'>
            <div className='grid wide'>
                <div className='cart-container'>
                    <div className='cart-title'>GIỎ HÀNG CỦA BẠN</div>
                    <div className='cart_product'>
                        <ul className='cart_product-list'>
                            {userCart && userCart.map((item, i) => (
                                <li className='cart_product-item row'>
                                    <div className='cart_product-img-container col c-2'>
                                        <img className='cart_product-img' src={`${BASE_URL}/uploads/${item.img}`} />
                                    </div>
                                    <div className='cart_product-information col c-8'>
                                        <div className='cart_product-information-title'>{item.name}</div>
                                        <div className='cart_product-information-desciption'>{item.description}</div>
                                        {/* <div className='cart_product-information-producer'>{item.description}</div> */}
                                        <div className='cart_product-information-price' id={`item${i}`}>{formatCurrency(item.price)}</div>
                                    </div>
                                    <div className='cart_product-quantity col c-2'>
                                        <button className='cart_product-quantity-decrease' onClick={() => {
                                            userCart[i].quantity--;
                                            if (userCart[i].quantity == 0) {
                                                for (let j = i; j < userCart.length; j++) {
                                                    if ((j + 1) == userCart.length) {
                                                        userCart.length--; break;
                                                    } else {
                                                        userCart[j] = userCart[j + 1];
                                                    }
                                                }
                                            }
                                            cartCount.quantity--;
                                            window.localStorage.setItem("cart", JSON.stringify(userCart));
                                            window.localStorage.setItem("Cart", JSON.stringify(cartCount));

                                            if (userCart.length == 0) {
                                                window.localStorage.removeItem("cart");
                                            }
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
                        <div className='cart_product-total-price' style={{ color: "red" }}>{formatCurrency(total)}</div>
                    </div>
                    <button className="order-button" onClick={handlePayment}>Đặt hàng</button>
                </div>

                {isPayment && (
                    <div className="login-modal">
                        <div className="login-modal-content">
                            <h1 style={{ margin: '20px 0px' }}>Chọn phương thức thanh toán</h1>
                            <button className="login-ok-button" style={{ backgroundColor: '#201f1f', margin: '20px 0px' }} onClick={orderProducts}>Thanh toán khi nhận hàng</button>
                            <PayPalScriptProvider options={{ "client-id": "AX3s6cebW3UiIavB6oxgsUf2PgDSlMYQNZBHsTI1Nzu45e8P-Lvb9b3s1OmeuNiaMfvJyuSXjsudHIYg" }}>
                                <PayPalButtons
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                    style={{ layout: 'horizontal' }}
                                />
                            </PayPalScriptProvider>
                            <button className="login-ok-button" onClick={() => setIsPayment(false)}>Đóng</button>
                        </div>
                    </div>
                )}
                {isOrder && (
                    <div className="login-modal">
                        <div className="login-modal-content">
                            <h1>Đặt hàng thành công</h1>
                            <p style={{ margin: '20px 0px' }}>Đơn hàng đang chờ duyệt</p>
                            <a className="login-ok-button" href='http://localhost:3000/user/history' onClick={deleteCart}>OK</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;