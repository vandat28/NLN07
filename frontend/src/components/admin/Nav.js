import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul class="nav sidebar-nav">
            <li><Link to='/admin/'>Trang chủ</Link></li>
            <li><Link to='/admin/product'>Quản lý sản phẩm</Link></li>
            <li><a href="#events">Quản lý đơn hàng</a></li>
            <li><a href="#team">Quản lý khách hàng</a></li>
            <li><a href="#services">Thống kê</a></li>
            <li><a href="#contact">Hỗ trợ</a></li>
            <li><a href="#followme">Cài đặt</a></li>
        </ul>
    )
}
