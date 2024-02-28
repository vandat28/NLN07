import React from 'react'
import Nav from './Nav';
import AdminDashboard from './AdminDashboard';
import AdminProduct from './AdminProduct';
import { Route, Routes } from 'react-router-dom';
import './admin.css'


export default function AdminPage() {
    return (
        <>
            <div id='wrapper'>
                <Nav />
                <div id="page-content-wrapper">
                    <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/product" element={<AdminProduct />} />
                        {/* Thêm các route con cho admin */}
                    </Routes>
                </div>
            </div>
        </>
    )
}

