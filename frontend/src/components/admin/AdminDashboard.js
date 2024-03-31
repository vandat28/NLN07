import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import axios from 'axios';
import BASE_URL from '../../configURL';
const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(amount);
};

export default function AdminDashboard() {
    const [data, setData] = useState([])
    const [count1, setCount1] = useState([])
    const [count2, setCount2] = useState([])
    const [chartData, setChartData] = useState({})
    const [sum, setSum] = useState(0)

    useEffect(() => {
        getOrders()
        getOrdersIn7Days()
        getOrdersPaidIn7Days()
    }, []);

    const getOrders = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/analyst`);
            setChartData({
                labels: response.data.map((item) => {
                    return item.ngay;
                }),
                datasets: [{
                    label: 'Doanh thu',
                    data: response.data.map((day) => {
                        return day.tongtien;
                    }),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            })
            let sum = 0;
            response.data.forEach(item => {
                sum += item.tongtien;
            });
            setSum(sum)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getOrdersIn7Days = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/analyst/count-7days`);
            setCount1(response.data[0].tongDon)
            console.log(response.data[0].tongDon)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getOrdersPaidIn7Days = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/analyst/count-paid-7days`);
            setCount2(response.data[0].tongDon)
            console.log(response.data[0].tongDon)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div class="main-container">
            <div class="item_container">
                <div class="item store_container">
                    <div class="sup_header">
                        <div class="top_dt">
                            <h1>DANH THU CỬA HÀNG</h1>
                            <div class="time_desc">7 ngày qua</div>


                        </div>
                        <div class="dt_sum">
                            <div class="sup_dt_sum">{formatCurrency(sum)}</div>
                        </div>

                    </div>
                    <div class="chart_content">
                        <div class="chart_row">
                            <BarChart data={chartData} />
                        </div>
                        <div class="type_report">
                            <div class="sup_report">
                                <select class="btn_report">
                                    <i class="fa-solid fa-caret-down"></i>
                                    <option value="option1">Chọn loại báo cáo</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

            <div class="item_container">
                <div class="item ship_container">
                    <div class="sup_header">
                        <div class="top_dt">
                            <h1>THÔNG TIN GIAO HÀNG</h1>
                            <div class="time_desc">7 ngày qua</div>


                        </div>

                    </div>
                    <div class="chart_content">
                        <div class="chart_row">
                            <BarChart data={data} />
                        </div>
                        <div class="type_report">
                            <div class="sup_report">
                                <select class="btn_report">
                                    <i class="fa-solid fa-caret-down"></i>
                                    <option value="option1">Chọn loại báo cáo</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="report_main main_container">
                <div class="item_report item_container">
                    <div class="item report_content">
                        <div class="sup_header">
                            <div class="top_dt">
                                <h1>TRẢ HÀNG</h1>
                                <div class="time_desc">7 ngày qua</div>


                            </div>
                            <div class="dt_sum">
                                <div class="sup_dt_sum">0</div>
                            </div>

                        </div>
                        <div class="return_content">
                            <div class="type_view">
                                <div class="sup_1 sup_type">
                                    <div>
                                        <ul class="list_type">
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-solid fa-clipboard-list"></i>
                                                    <span>Trả hàng theo đơn hàng </span>
                                                </div>
                                            </li>
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-brands fa-product-hunt"></i>
                                                    <span>Trả hàng theo sản phẩm</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="item_report item_container">
                    <div class="item report_content">
                        <div class="sup_header">
                            <div class="top_dt">
                                <h1>THANH TOÁN</h1>
                                <div class="time_desc">7 ngày qua</div>


                            </div>
                            <div class="dt_sum">
                                <div class="sup_dt_sum">{count2}</div>
                            </div>

                        </div>

                        <div class="return_content">
                            <div class="type_view">
                                <div class="sup_1 sup_type">
                                    <div>
                                        <ul class="list_type">
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-solid fa-clipboard-list"></i>
                                                    <span>Báo cáo thanh toán theo thời gian</span>
                                                </div>
                                            </li>
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-brands fa-product-hunt"></i>
                                                    <span>Báo cáo thanh toán theo nhân viên</span>
                                                </div>
                                            </li>
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-solid fa-folder-closed"></i>
                                                    <span>Báo cáo theo phương thức thanh toán</span>
                                                </div>
                                            </li>
                                            <li class="item_type desc_type">
                                                <div class="type_1">
                                                    <i class="fa-solid fa-code-branch"></i>
                                                    <span>Báo cáo thanh toán theo chi nhánh</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="item_report item_container">
                    <div class="item report_content">
                        <div class="sup_header">
                            <div class="top_dt">
                                <h1>ĐƠN HÀNG</h1>
                                <div class="time_desc">7 ngày qua</div>


                            </div>
                            <div class="dt_sum">
                                <div class="sup_dt_sum">{count1}</div>
                            </div>

                        </div>
                        <div class="return_content">
                            <div class="type_view">
                                <div class="sup_1 sup_type">
                                    <ul class="list_type">
                                        <li class="item_type desc_type">
                                            <div class="type_1">
                                                <i class="fa-solid fa-folder-closed"></i>

                                                <span>Báo cáo thống kê theo đơn hàng</span>
                                                <img src="https://sapo.dktcdn.net/sapo-frontend-v3/master/static/media/070edd4ab0f92db7724a.svg" alt="" />
                                            </div>
                                        </li>
                                        <li class="item_type desc_type">
                                            <div class="type_1">
                                                <i class="fa-solid fa-folder-closed"></i>

                                                <span>Báo cáo thống kê theo sản phẩm</span>
                                            </div>
                                        </li>
                                        <li class="item_type desc_type">
                                            <div class="type_1">
                                                <i class="fa-solid fa-folder-closed"></i>

                                                <span>Báo cáo bán hàng chi tiết</span>
                                            </div>
                                        </li>
                                    </ul>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
