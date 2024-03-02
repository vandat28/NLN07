import React, { useEffect, useState } from 'react'



export default function AdminProduct() {


    const [data, setData] = useState([])

    useEffect(() => {
        getApiData()
    }, []);

    const getApiData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/products`);
            const data = await response.json();
            if (data) {
                setData(data);
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }

    };




    return (
        <div className="product-manager">
            <div className="filter-section">
                <select value="Chọn loại" >
                    <option value="">- Chọn loại -</option>
                    <option value="Type A">Type A</option>
                    <option value="Type B">Type B</option>
                    {/* Add more options for product types */}
                </select>
                <div className="filter">
                    <button className="filter-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Xem danh mục</button>
                    <button className="filter-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Thêm sản phẩm</button>
                </div>
            </div>
            <div className="product-table">
                <table>
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th className='color-blue'>Sản phẩm</th>
                            <th>Loại</th>
                            <th>Kho</th>
                            <th className='color-blue'>Giá bán</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <tr key={product.maSP}>
                                <td> <img style={{ width: '100px', height: '100px' }} src='https://mebiphar.vn/image/cache/catalog/combo/COMBO%203/khau-trang-mebiphar-3d-mask-size-m-mau-trang-500x500.png' /></td>
                                <td className='color-blue'>
                                    {product.tenSP}
                                </td>
                                <td>{product.tenLoai}</td>
                                <td>{product.soLuongCon}</td>
                                <td className='color-blue'>{product.giaBan} VNĐ</td>
                                <td>
                                    <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                    <button type="button" ><i class="fa-solid fa-pen-to-square"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <p>Tổng số trang: 102 </p>
                <a href="#" className="prev">&laquo;</a>
                <input className="page" value={1} />
                <a href="#" className="next"> &raquo;</a>
            </div>
            <form className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm sản phẩm</h5>
                        </div>
                        <div className="modal-body">
                            <div className='input-grid'>
                                <div className="input-container">
                                    <label className="input-label">Tên sản phẩm</label>
                                    <input type="text" className="input-field" name="name" />
                                </div>
                                <div className="input-container">
                                    <label className="input-label">Hình ảnh</label>
                                    <input type="file" className="input-field" name="image" />
                                </div>
                                <div className="input-container">
                                    <label className="input-label">Giá bán</label>
                                    <input type="text" className="input-field" name="price" />
                                </div>
                                <div className="input-container">
                                    <label className="input-label">Mô tả</label>
                                    <textarea type="text" className="input-field" name="description" />
                                </div>
                                <div className="input-container">
                                    <label className="input-label">Loại sản phẩm</label>
                                    <input type="text" className="input-field" name="description" />
                                </div>
                                <div className="input-container">
                                    <label className="input-label">Số lượng</label>
                                    <input type="text" className="input-field" name="description" />
                                </div>
                            </div>

                        </div>
                        <div className="modal-buttons">
                            <button type="button" className="modal-button close-button" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" className="modal-button save-button">Lưu</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Danh mục sản phẩm</h5>
                        </div>
                        <div className="add-category">
                            <input type="text" className="category-input" placeholder="Nhập tên danh mục" />
                            <button type="button" className="add-button">Thêm danh mục</button>
                        </div>
                        <div className="modal-body">
                            <table className="category-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên danh mục</th>
                                        <th>Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button" ><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh mục 1</td>
                                        <td>
                                            <button type="button" ><i class="fa-solid fa-trash"></i></button>
                                            <button type="button"><i class="fa-regular fa-pen-to-square"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-buttons">
                            <button type="button" className="modal-button close-button" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
