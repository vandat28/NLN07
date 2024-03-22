import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import User from './User';
import Cart from './Cart';
import BASE_URL from '../../configURL';

function Header(props) {
    const userCurrent = JSON.parse(window.localStorage.getItem('User'));
    const userCart = JSON.parse(window.localStorage.getItem('cart'));
    const { setData } = props
    const [quantity, setQuantity] = useState()
    const [userOnline, setUserOnline] = useState(userCurrent);
    const [userOffline, setUserOffline] = useState("");
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const headerCover = document.querySelector('.header__cover');
        const headerFixed = document.querySelector('.header__fixed');
        const cartCount = JSON.parse(window.localStorage.getItem('Cart'));

        const handleScroll = () => {
            if (window.scrollY > 40) {
                headerFixed.classList.add('fixed');
                headerCover.classList.add('block');
            } else {
                headerFixed.classList.remove('fixed');
                headerCover.classList.remove('block');
            }
        }
        window.addEventListener('scroll', handleScroll)
        if (cartCount) {
            setQuantity(cartCount.quantity)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useLayoutEffect(() => {
        if (window.localStorage.getItem("User") != null) {
            setLogin(true)
        } else {
            setLogin(false)
            setUserOnline(userOffline)
        }
    }, [userOnline])

    const handleChange = async (event) => {
        setSearch(event.target.value);


    };

    const handleSearch = async (event) => {
        event.preventDefault()
        const response = await fetch(`${BASE_URL}/api/products/search?searchTxt=${search}`);
        const data = await response.json();
        if (data) {
            console.log(data)
            setData(data);
        }
    }

    return (
        <div className='header'>
            <div className='header__form'>
                <div className='grid wide'>
                    <div className='header__form-content grid wide'>
                        <ul className='header__form-list'>
                            {!login && <li className='header__form-item'>
                                <Link to="/Login">Đăng nhập</Link>
                            </li>}
                            {!login && <li className='header__form-item'>
                                <Link to="/Register">Đăng ký</Link>
                            </li>}
                            {login && <li className='header__form-item'>
                                <Link to="/user">
                                    <i className="fa-regular fa-user" style={{ paddingRight: "4px" }}></i>{userOnline.name}
                                </Link>
                            </li>}
                            {login && userOnline.role == 1 ? <li className='header__form-item'>
                                <Link to="/admin">Admin</Link>
                            </li> : null}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='header__fixed'>
                <div className='grid wide'>
                    <div className='header__main'>
                        <a href='http://localhost:3000' className='header__main-logo'>
                            <div className='header__main-logo-container'>
                            </div>
                            <div className='header__main-logo-title'>HealPro</div>
                        </a>
                        <form onSubmit={handleSearch} className='header__main-find'>
                            <input className='header__main-find-input' placeholder='Nhập tên sản phẩm' value={search} onChange={handleChange} />
                            <button type='submit' className='header__main-find-button'>search</button>
                        </form>
                        <Link to='/Cart' className='header__main-cart'>
                            <i className="fa-solid fa-cart-shopping header__main-cart-icon"></i>
                            <div className='header__main-cart-total'>{quantity}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='header__cover'></div>

            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/user' element={<User />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>
        </div >
    );
}

export default Header;