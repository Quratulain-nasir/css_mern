import React from 'react'
import GuestNav from '../GuestNav'
import FooterSection from '../FooterSection'
import Header from '../Header'

import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from '../Home';
import Login from './Pages/Login'
import Product from '../Products'
import Category from '../Category';
import AboutPage from '../About';
import ProductPage from '../ProductPage';
import ProductByCategory from '../ProductsByCategory';
import ProductByBrand from '../ProductsbyBrands';





export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/login" element={<Login />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/product/category/:category" element={<ProductByCategory />} />
              <Route path="/products/brand/:brand" element={<ProductByBrand />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
            <FooterSection/>
        </>
    )
}
