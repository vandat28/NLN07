import React from 'react';
import Header from "./components/user/Header";
import Homepage from './components/user/Homepage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/user/Footer';
import User from './components/user/User';
import History from './components/user/History';
import AdminPage from './components/admin/AdminPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/user/profile' element={<User />} />
        <Route path='/user/history' element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
