import React from 'react'
import Nav from './Nav';
import AdminProduct from './AdminProduct';
import { Route, Routes } from 'react-router-dom';
import './admin.css'
import AdminOrder from './AdminOrder';



export default function AdminPage() {
    return (
        <div className="main">
            <div className="grid wide">
                <Routes>
                    <Route path="/" element={<Nav />} />
                    <Route path="/product" element={<AdminProduct />} />
                    <Route path="/order" element={<AdminOrder />} />
                    {/* Thêm các route con cho admin */}
                </Routes>
            </div>
        </div>
    )
}

