import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";
import Register from './Register';
import Login from './Login';

function Header() {

    useEffect(() => {
        const headerMain = document.querySelector('.header__main');
        const headerCover = document.querySelector('.header__cover');
        const headerFixed = document.querySelector('.header__fixed');

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    return (
        <div className='header'>
            <div className='header__form'>
                <div className='grid wide'>
                    <div className='header__form-content grid wide'>
                        <ul className='header__form-list'>
                            <li className='header__form-item'>
                                <Link to="/Login">Đăng nhập</Link>
                            </li>
                            <li className='header__form-item'>
                                <Link to="/Register">Đăng ký</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='header__fixed'>
                <div className='grid wide'>
                    <div className='header__main'>
                        <Link to='/' className='header__main-logo'>
                            <div className='header__main-logo-container'>
                            </div>
                            <div className='header__main-logo-title'>HealPro</div>
                        </Link>
                        <div className='header__main-find'>
                            <input className='header__main-find-input' placeholder='Nhập tên sản phẩm' />
                            <button className='header__main-find-button'>search</button>
                        </div>
                        <div className='header__main-cart'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header__cover'></div>

            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default Header;