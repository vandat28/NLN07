import React, { useEffect, useState } from 'react';
import Header from "./components/user/Header";
import Homepage from './components/user/Homepage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/user/Footer';
import User from './components/user/User';
import AdminPage from './components/admin/AdminPage';
import ProductDetail from './components/user/ProductDetail';
import BASE_URL from './configURL';
import axios from 'axios';



function App() {

  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [advertisement, setAdvertisement] = useState([])


  const createCart = () => {
    const count = {
      quantity: "0"
    }
    window.localStorage.setItem("Cart", JSON.stringify(count));
  }

  if (window.localStorage.key(0) == null) {
    createCart();
  }
  useEffect(() => {
    getApiData()
    getApiDataCategory()
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/products`);
      const data = await response.json();
      if (data) {
        setData(data);
        setAdvertisement(data);
      }
    } catch (error) {
      console.log('Đã xảy ra lỗi:', error);
    }

  };


  const getApiDataCategory = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/category`);
      const data = await response.json();
      if (data) {
        setCategory(data);
      }
    } catch (error) {
      console.log('Đã xảy ra lỗi:', error);
    }
  };





  return (
    <>
      <Header setData={setData} />
      <Routes>
        <Route path='/' element={<Homepage data={data} setData={setData} advertisement={advertisement} category={category} />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/user/*' element={<User />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
