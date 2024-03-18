import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BASE_URL from '../configURL';

//chuyển về tiền vnđ
const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(amount);
};



export default function ProductDetail() {
    var cart, count = 0;
    const { id } = useParams();
    const [data, setData] = useState([])
    const [same, setSame] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');
    const slides = document.querySelector('.slides');

    window.addEventListener('DOMContentLoaded', () => {
        allHoverImages[0].parentElement.classList.add('active');
    });

    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            imgContainer.querySelector('img').src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('active');
        });
    });

    function resetActiveImg() {
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }

    useEffect(() => {
        getProduct(id)
    }, []);

    useLayoutEffect(() => {
        const oldCart = JSON.parse(localStorage.getItem("cart"));

        if (!oldCart) {
            cart = new Array()
        } else {
            cart = [...oldCart]
        }
    })


    function addToCart() {
        var checkSP = 0;
        const sp = new Object();
        sp.id = data[0].maSP
        sp.img = data[0].anhdaidien;
        sp.name = data[0].tenSP;
        sp.price = data[0].giaBan;
        sp.description = data[0].moTa;
        sp.quantity = 1;
        for (let i = 0; i < cart.length; i++) {
            if (sp.name == cart[i].name) {
                checkSP = 1;
                cart[i].quantity++;
                console.log(cart[i].quantity);
                break;
            }
        }
        if (checkSP == 0) {
            cart.push(sp);
        }

        for (let i = 0; i < cart.length; i++) {
            count += cart[i].quantity;
        }

        localStorage.setItem("Cart", JSON.stringify({ quantity: `${count}` }));
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
    }

    const findProductsByCategory = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/category/${id}`);
            setSame(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getProduct = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/${id}`);
            setData(response.data);
            findProductsByCategory(response.data[0].maLoai)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 20}%)`;
    }

    return (
        <div className="main">
            <div className='grid wide'>
                {data[0] && <div className="product-div">
                    <div className="product-div-left">
                        <div className="img-container">
                            <img src={`${BASE_URL}/uploads/${data[0].anhdaidien}`} alt="" />
                        </div>
                        <div className="hover-container">
                            <div><img src={`${BASE_URL}/uploads/${data[0].anhdaidien}`} /></div>
                            {/* <div><img src={`${BASE_URL}/uploads/fee94d37747f0c54362f9b2377dd0fd6`} /></div> */}
                        </div>
                    </div>
                    <div className="product-div-right">
                        <span className="product-name">{data[0].tenSP}</span>
                        <span className="product-price color-red">{formatCurrency(data[0].giaBan)}</span>
                        <div className="product-rating">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star-half-alt"></i></span>
                            <span>(350 ratings)</span>
                        </div>
                        <p className="product-description">{data[0].moTa}</p>
                        <div className="btn-groups">
                            <button type="button" className="add-cart-btn" onClick={addToCart}><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</button>
                            <button type="button" className="buy-now-btn"><i className="fas fa-wallet"></i> Mua ngay</button>
                        </div>
                    </div>
                </div>}
                <div className='product-same'>
                    <div className='product-same_title'>CÁC SẢN PHẨM LIÊN QUAN</div>
                    <div className='carousel'>
                        <ul className='slides'>
                            {same.map(product => (
                                <Link to={`/product/${product.maSP}`} className='slide col c-2-4'>
                                    <img className='product-item_img' src={`${BASE_URL}/uploads/${product.anhdaidien}`}></img>
                                    <div className='product-item_information'>
                                        <div className='product-same_item_name'>{product.tenSP}</div>
                                        <div className='product-same_item_description'>{product.moTa}</div>
                                        <div className='product-item_price'>{formatCurrency(product.giaBan)}</div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                        <button className="button-slide prev" onClick={() => {
                            if (currentIndex > 0) {
                                showSlide(currentIndex - 1);
                                setCurrentIndex(currentIndex - 1);
                            }
                        }}><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="button-slide next" onClick={() => {
                            if (currentIndex < slides.children.length - 1) {
                                showSlide(currentIndex + 1);
                                setCurrentIndex(currentIndex + 1);
                            } else {
                                showSlide(0);
                                setCurrentIndex(0);
                            }
                        }}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='product-feedback'>
                    <div className='product-same_title'>Đánh giá sản phẩm</div>
                    <div className='product-feedback_container'>
                        <ul className='product-feedback_list'>
                            <li className='product-feedback_item'>
                                <div className='product-feedback_avatar'>
                                    <i className="fa-regular fa-user"></i>
                                </div>
                                <div className='product-feedback_content'>
                                    <div className='product-feedback_item-user'>Quốc Thiên</div>
                                    <div className='product-feedback_item-comment'>Xịn</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
