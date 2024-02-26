import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import History from './History';

function User() {
    return (
        <div className='user'>
            <div className='grid wide'>
                <div className='user-form row'>
                    <div className='user-caterogy col c-3'>
                        <div className='user-caterogy_title'>Người dùng</div>
                        <ul className='user-caterogy_list'>
                            <li className='user-caterogy_item'>
                                <Link to="/user/profile" className='user-caterogy_item-link'>Tài Khoản Người Dùng</Link>
                            </li>
                            <li className='user-caterogy_item'>
                                <Link to="/user/history" className='user-caterogy_item-link'>Lịch Sử Mua Hàng</Link>
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
                                <div className='user-detail_info-item'>Bùi Quốc Thiên</div>
                                <div className='user-detail_info-item'>0886409254</div>
                                <div className='user-detail_info-item'>Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ</div>
                                <div className='user-detail_info-item'>Nam</div>
                                <div className='user-detail_info-item'>2002</div>
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