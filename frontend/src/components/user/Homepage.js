import React, { useEffect, useLayoutEffect, useState } from 'react';
import BASE_URL from '../../configURL';
import axios from 'axios';
import { Routes, Route, Link, Router } from "react-router-dom";


//chuyển về tiền vnđ
const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(amount);
};


function Homepage(props) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const { data, category, setData, advertisement, quantityCart } = props

    const findProductsByCategory = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/category/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        const slides = document.querySelector('.slides');
        const intervalId = setInterval(() => {
            if (currentIndex < slides.children.length - 1) {
                slides.style.transform = `translateX(-${(currentIndex + 1) * 20}%)`;
                setCurrentIndex(currentIndex + 1);
            } else {
                slides.style.transform = `translateX(-${0 * 20}%)`;
                setCurrentIndex(0);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div className="main">
            <div className="grid wide">
                <div className='row'>
                    <div className='caterory col c-3'>
                        <ul className='caterory-list'>
                            <div className='caterory-title'>Danh mục sản phẩm</div>
                            {category.map((item) => (
                                <li key={item.id} className='caterory-item' onClick={() => findProductsByCategory(item.id)}>
                                    {item.tenLoai}
                                    <i className="fa-solid fa-square-caret-down caterory-item-icon"></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='product col c-9'>
                        <div className='advertisement carousel'>
                            <div className='advertisement-title'>NHỮNG MẶT HÀNG BÁN CHẠY</div>
                            <ul className='slides'>
                                {advertisement.map(product => (
                                    <Link to={`/product/${product.maSP}`} className='slide col c-2-4'>
                                        <div className='product-item_img-container'>
                                            <img className='product-item_img' src={`${BASE_URL}/uploads/${product.anhdaidien}`}></img>
                                            <div className='new'>New</div>
                                        </div>
                                        <div className='product-item_information'>
                                            <div className='product-same_item_name'>{product.tenSP}</div>
                                            <div className='product-same_item_description'>{product.moTa}</div>
                                            <div className='product-item_price'>{formatCurrency(product.giaBan)}</div>
                                        </div>
                                    </Link>
                                ))}
                            </ul>
                            <button className="button-slide prev" onClick={() => {
                                const slides = document.querySelector('.slides');
                                if (currentIndex > 0) {
                                    slides.style.transform = `translateX(-${(currentIndex - 1) * 20}%)`;
                                    setCurrentIndex(currentIndex - 1);
                                }
                            }}><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="button-slide next" onClick={() => {
                                const slides = document.querySelector('.slides');
                                if (currentIndex < slides.children.length - 1) {
                                    slides.style.transform = `translateX(-${(currentIndex + 1) * 20}%)`;
                                    setCurrentIndex(currentIndex + 1);
                                } else {
                                    slides.style.transform = `translateX(-${0 * 20}%)`;
                                    setCurrentIndex(0);
                                }
                            }}><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <ul className='product-list row'>
                            {data.map(product => (
                                <Link to={`/product/${product.maSP}`} className='product-item c-2-4'>
                                    <img className='product-item_img' src={`${BASE_URL}/uploads/${product.anhdaidien}`}></img>
                                    <div className='product-item_information'>
                                        <div className='product-item_name'>{product.tenSP}</div>
                                        <div className='product-item_description'>{product.moTa}</div>
                                        <div className='product-item_price'>{formatCurrency(product.giaBan)}</div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Homepage;