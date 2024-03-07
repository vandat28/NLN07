import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User';

function History() {
    return (
        <div className='user-detail col c-9'>
            <div className='user-detail_title'>Lịch sử mua hàng</div>
            <div className='row'>
                <div className='user-detail_label-list'>
                    Lịch sử
                </div>
            </div>
        </div>
    );
}

export default History;
