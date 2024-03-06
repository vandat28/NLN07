import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import History from './History';
import Homepage from './Homepage';

function User() {
    const userCurrent = JSON.parse(window.localStorage.getItem('User'));
    const [userOnline, setUserOnline] = useState(userCurrent);


    return (
        <div className='user'>
            <div className='grid wide'>
                <div className='user-form row'>
                    <div className='user-caterogy col c-3'>
                        <div className='user-caterogy_title'>Người dùng</div>
                        <ul className='user-caterogy_list'>
                            <li className='user-caterogy_item'>
                                <Link to="/user/profile" className='user-caterogy_item-link' style={{color:"blue"}}>Tài Khoản Người Dùng</Link>
                            </li>
                            <li className='user-caterogy_item'>
                                <Link to="/user/history" className='user-caterogy_item-link'>Lịch Sử Mua Hàng</Link>
                            </li>
                            <li className='user-caterogy_item'>
                                <a href="http://localhost:3000/" className='user-caterogy_item-link' onClick={() => {
                                    window.localStorage.clear();
                                }}>Đăng xuất</a>
                            </li>
                        </ul>
                    </div>
                    <div className='user-detail col c-9'>
                        <div className='user-detail_title'>Hồ Sơ Của Tôi</div>
                        <div className='row'>
                            <div className='user-detail_label-list col c-4'>
                                <div className='user-detail_label-item'>Họ và tên:</div>
                                <div className='user-detail_label-item'>Số điện thoại:</div>
                                <div className='user-detail_label-item'>Địa chỉ:</div>
                                <div className='user-detail_label-item'>Giới tính:</div>
                                <div className='user-detail_label-item'>Năm sinh:</div>
                            </div>
                            <div className='user-detail_info-list col c-8'>
                                <div className='user-detail_info-item'>{userOnline.name}</div>
                                <div className='user-detail_info-item'>{userOnline.phone}</div>
                                <div className='user-detail_info-item'>{userOnline.address}</div>
                                <div className='user-detail_info-item'>{userOnline.sex}</div>
                                <div className='user-detail_info-item'>{userOnline.yob}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/user/profile' element={<User />} />
                <Route path='/user/history' element={<History />} />
            </Routes>
        </div >
    );
}

export default User;