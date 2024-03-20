import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import BASE_URL from '../configURL';
import axios from 'axios';


const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(amount);
};


export default function DetailOder() {

    const user = JSON.parse(window.localStorage.getItem("User"));
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const total = searchParams.get('total');
    const tinhTrangId = searchParams.get('tinhTrang');
    const [data, setData] = useState([])
    const [isReceived, setIsReceived] = useState(false)

    const [formFeedBack, setFormFeedBack] = useState({
        comment: '',
        evaluate: '',
        SpID: '',
        UserID: ''
    })


    useEffect(() => {
        getOrders(id)
        if (tinhTrangId == 4) {
            setIsReceived(true)
        }
    }, []);

    useLayoutEffect(() => {
        const stars = document.querySelectorAll(".invaluate-icon");
        stars.forEach((star, index, parent) => {
            star.addEventListener("click", function () {
                for (let i = 0; i <= index; i++) {
                    parent[i].classList.add('yellow');
                }
            })
        })
    })

    const getOrders = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/order/detail?id=${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const updateOrder = async (maDH, tinhTrang, thanhToan) => {
        try {
            // Thực hiện yêu cầu PUT
            const response = await axios.put(`${BASE_URL}/api/order/${maDH}`, { tinhTrang, thanhToan });
            // Xử lý kết quả từ phản hồi server
            console.log(response.data); // In ra dữ liệu phản hồi từ server
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Error updating order:', error);
        }
    }

    const receivedOrder = async (maDH, tinhTrang, thanhToan) => {
        if (tinhTrangId == 3) {
            // Thực hiện hành động khi điều kiện được đáp ứng
            const isConfirmed = window.confirm(`Bạn đã nhận được đơn hàng #${maDH}`);
            if (isConfirmed) {
                await updateOrder(maDH, tinhTrang, thanhToan)
                setIsReceived(true)
                alert('Cảm ơn quý khách!!')
            } else {

            }
        } else {
            // Thông báo nếu điều kiện không được đáp ứng
            alert("Đơn hàng chưa được giao cho đơn vị vận chuyển!!");
        }

    }

    const addFeedBack = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/api/feedbacks`, formFeedBack, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                // Xử lý kết quả từ server
                console.log(response.data);
                setFormFeedBack({
                    comment: '',
                    evaluate: '',
                    SpID: '',
                    UserID: ''
                })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
            });
        // Gửi dữ liệu đến server, thực hiện các tác vụ cần thiết, vv.
    };

    return (
        <div className='user-detail col c-9'>
            <div className='user-detail_title'>
                Chi tiết đơn hàng - #{id}
            </div>
            <div className='cart_product'>
                <ul className='cart_product-list'>
                    {data && data.map((item, i) => (
                        <li className='cart_product-item row'>
                            <div className='cart_product-img-container col c-2'>
                                <img className='cart_product-img' src={`${BASE_URL}/uploads/${item.anhdaidien}`} />
                            </div>
                            <div className='cart_product-information col c-8'>
                                <div className='cart_product-information-title'>{item.tenSP}</div>
                                {/* <div className='cart_product-information-producer'>{item.description}</div> */}
                                <div className='cart_product-information-price' id={`item${i}`}>{formatCurrency(item.giaBan)}</div>
                            </div>
                            <div className='cart_product-quantity col c-2' style={{ fontSize: '14px' }}>Số lượng: {item.soLuongSP}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='cart_product-total'>
                <div className='cart_product-total-title'>Tổng tiền:</div>
                <div className='cart_product-total-price' style={{ color: "red" }}>{formatCurrency(total)}</div>
            </div>
            <div className='main-buttons' style={{ justifyContent: 'flex-end' }}>
                {isReceived ?
                    <button className="large-button" style={{ width: '18%', textAlign: 'center' }}>Đánh giá</button>
                    :
                    <button className="large-button" onClick={() => receivedOrder(id, 4, 1)} style={{ width: '18%', textAlign: 'center' }}>Đã nhận hàng</button>
                }
            </div>
            <div className='invaluate-container'>
                <div className='invaluate-title'>Đánh giá sản phẩm</div>
                <div className='invaluate-star'>
                    Chất lượng:
                    <i className="fa-solid fa-star invaluate-icon" style={{ marginLeft: "10px" }}></i>
                    <i className="fa-solid fa-star invaluate-icon"></i>
                    <i className="fa-solid fa-star invaluate-icon"></i>
                    <i className="fa-solid fa-star invaluate-icon"></i>
                    <i className="fa-solid fa-star invaluate-icon"></i>
                </div>
                <textarea type='text' className='invaluate-content' placeholder='Nhận xét' />
                <button type='button' className='invaluate-btn'>Gửi</button>
            </div>
        </div >

    )
}
