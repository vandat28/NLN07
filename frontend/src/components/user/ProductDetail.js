import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BASE_URL from '../configURL';


export default function ProductDetail() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');

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


    const getProduct = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="main">
            <div className='grid wide'>
                {data[0] && <div class="product-div">
                    <div class="product-div-left">
                        <div class="img-container">
                            <img src={`${BASE_URL}/uploads/${data[0].anhdaidien}`} alt="" />
                        </div>
                        <div class="hover-container">
                            <div><img src={`${BASE_URL}/uploads/${data[0].anhdaidien}`} /></div>
                            <div><img src={`${BASE_URL}/uploads/fee94d37747f0c54362f9b2377dd0fd6`} /></div>
                        </div>
                    </div>
                    <div class="product-div-right">
                        <span class="product-name">{data[0].tenSP}</span>
                        <span class="product-price">{data[0].giaBan}</span>
                        <div class="product-rating">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star-half-alt"></i></span>
                            <span>(350 ratings)</span>
                        </div>
                        <p class="product-description">{data[0].moTa}</p>
                        <div class="btn-groups">
                            <button type="button" class="add-cart-btn"><i class="fas fa-shopping-cart"></i> Thêm vào giỏ</button>
                            <button type="button" class="buy-now-btn"><i class="fas fa-wallet"></i> Mua ngay</button>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    )
}
