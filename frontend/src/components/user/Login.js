import React from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";
import Register from './Register';

function Login() {
  return (
    <div className="Login">
      <div className='grid wide'>
        <form className='login-form'>
          <div className='row'>
            <div className='login-infor col c-6'>
              <div className='login-infor_title'>KHÁCH HÀNG ĐÃ ĐĂNG KÝ</div>
              <div className='login-infor_phoneLabel'>Số điện thoại</div>
              <input className='login-infor_phone' placeholder='Nhập số điện thoại' required pattern='^[0-9]{10,11}$'></input>
              <div className='login-infor_passwdLabel'>Mật khẩu</div>
              <input type='password' className='login-infor_passwd' placeholder='Nhập mật khẩu' required></input>
              <button type='submit' className='login-form_submit'>Đăng nhập</button>
            </div>
            <div className='login-app col c-6'>
              <div className='login-app_title'>KHÁCH HÀNG MỚI</div>
              <ul className='login-app_benefit-list'>
                <div className='login-app_benefit-title'>Tạo một tài khoản mới có thêm nhiều lợi ích:</div>
                <li className='login-app_benefit-item'>Kiểm tra nhanh hơn</li>
                <li className='login-app_benefit-item'>Theo dõi các đơn hàng</li>
                <li className='login-app_benefit-item'>Lịch sử mua hàng được lưu trữ</li>
                <li className='login-app_benefit-item'>Thông tin cá nhân được lưu trữ và bảo mật</li>
                <Link className='login-app_benefit-link' to='/Register'>Tạo tài khoản</Link>
              </ul>
            </div>
          </div>
        </form>
      </div>

      <Routes>
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default Login;
