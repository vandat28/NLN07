import React, { useState } from 'react'


export default function AdminProduct() {



    const products = [
        { id: "Chọn trạng thái Chọn trạng thái Chọn trạng thái Chọn trạng thái Chọn trạng thái Chọn trạng thái ", name: 'Product 1', type: 'Type A', status: 'Active' },
        { id: 2, name: 'Product 2', type: 'Type B', status: 'Inactive' },
        { id: 3, name: 'Product 3', type: 'Type A', status: 'Active' },
        { id: 1, name: 'Product 1', type: 'Type A', status: 'Active' },
        { id: 2, name: 'Product 2', type: 'Type B', status: 'Inactive' },
        // Add more products as needed
    ];


    return (
        <div className="product-manager">
            <div className="filter-section">
                <select value="Chọn loại" >
                    <option value="">- Chọn loại -</option>
                    <option value="Type A">Type A</option>
                    <option value="Type B">Type B</option>
                    {/* Add more options for product types */}
                </select>
                <select value="Trạng thái" >
                    <option value="">- Chọn trạng thái -</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    {/* Add more options for product statuses */}
                </select>
                <div className="filter">
                    <button className="filter-button">Lọc</button>
                </div>
            </div>
            <div className="product-table">
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Loại</th>
                            <th>Trạng thái</th>
                            <th>Giá bán</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div class="pagination">
                <p>Tổng số trang: 102 </p>
                <a href="#" class="prev">&laquo;</a>
                <input class="page" value={1} />
                <a href="#" class="next"> &raquo;</a>
            </div>
        </div>
    )
}
