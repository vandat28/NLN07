import React from 'react'
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import './css/admin.css'
import AdminProduct from './AdminProduct';
import AdminOrder from './AdminOrder';
import AdminCustomer from './AdminCustomer';
import AdminCustomerDetail from './AdminCustomerDetail';
import AdminDashboard from './AdminDashboard'



export default function AdminPage() {
    return (

        <div className="grid wide">
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/product" element={<AdminProduct />} />
                <Route path="/order" element={<AdminOrder />} />
                <Route path="/customer" element={<AdminCustomer />} />
                <Route path="/customer/:id" element={<AdminCustomerDetail />} />
                <Route path="/analysis" element={<AdminDashboard />} />
                {/* Thêm các route con cho admin */}
            </Routes>
        </div>

    )
}

