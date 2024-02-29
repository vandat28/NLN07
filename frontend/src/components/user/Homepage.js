import React from 'react';




function Homepage() {
    return (
        <div className="main">
            <div className="grid wide">
                <div className='row'>
                    <div className='caterory col c-3'>
                        <ul className='caterory-list'>
                            <div className='caterory-title'>Danh mục sản phẩm</div>
                            <li className='caterory-item'>Đồ Bảo Hộ</li>
                            <li className='caterory-item'>Bình Xịt Kháng Khuẩn</li>
                            <li className='caterory-item'>...</li>
                        </ul>
                    </div>
                    <div className='product col c-9'>
                        <ul className='product-list row'>
                            <li className='product-item c-2-4'>
                                <div className='product-item_img'></div>
                                <div className='product-item_information'>
                                    <div className='product-item_name'>Khẩu Trang</div>
                                    <div className='product-item_price'>20.000</div>
                                </div>
                            </li>
                            <li className='product-item c-2-4'>
                                <div className='product-item_img'></div>
                                <div className='product-item_information'>
                                    <div className='product-item_name'>Khẩu Trang</div>
                                    <div className='product-item_price'>20.000</div>
                                </div>
                            </li>
                            <li className='product-item c-2-4'>
                                <div className='product-item_img'></div>
                                <div className='product-item_information'>
                                    <div className='product-item_name'>Khẩu Trang</div>
                                    <div className='product-item_price'>20.000</div>
                                </div>
                            </li>
                            <li className='product-item c-2-4'>
                                <div className='product-item_img'></div>
                                <div className='product-item_information'>
                                    <div className='product-item_name'>Khẩu Trang</div>
                                    <div className='product-item_price'>20.000</div>
                                </div>
                            </li>
                            <li className='product-item c-2-4'>
                                <div className='product-item_img'></div>
                                <div className='product-item_information'>
                                    <div className='product-item_name'>Khẩu Trang</div>
                                    <div className='product-item_price'>20.000</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;