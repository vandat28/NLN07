import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User';

function History() {
    return (
        <div className="History">
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
                        <div className='user-detail_title'>Lịch sử mua hàng</div>
                        <div className='row'>
                            <div className='user-detail_label-list'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/user/profile' element={<User />} />
                <Route path='/user/history' element={<History />} />
            </Routes>
        </div>
    );
}

export default History;
