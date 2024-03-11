import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const total = searchParams.get('total');
    const [data, setData] = useState([])


    useEffect(() => {
        getOrders(id)

    }, []);

    const getOrders = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/order/detail?id=${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className='user-detail col c-9'>
            <div className='user-detail_title'>Chi tiết đơn hàng - #{id}</div>
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

        </div>
    )
}
