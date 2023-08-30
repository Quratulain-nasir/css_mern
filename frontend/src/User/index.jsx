import React from 'react'
import Brands from '../Brands'
import Category from '../Category'
import Home from '../Home'
import AboutPage from '../About'
import Product from '../Products'
import Profile from './Pages/Profile'
import ProductByCategory from '../ProductsByCategory'
import ProductByBrand from '../ProductsbyBrands'
import UserNav from './Pages/UserNav'
import FooterSection from '../FooterSection'
import ProductPage from './Pages/ProductPage'
import Cart from './Pages/Cart'
import { Navigate, Route, Routes } from "react-router-dom";
import Header from '../Header'


export default function User() {

    return (

        <>
             <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/product/category/:category" element={<ProductByCategory />} />
              <Route path="/products/brand/:brand" element={<ProductByBrand />} />
                <Route path="/about" element={<AboutPage />} />              
                <Route path="/cart" element={<Cart />} />
                <Route path="/category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>
            <FooterSection/>
        </>
    )
}
