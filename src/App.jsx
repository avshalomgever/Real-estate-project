import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './components/homepage/HomePage';
import CoProduct from './components/products/Co-products'
import About from './components/about/About';
import Contact from './components/contact-us/Contact';
import  ProductInfo from './components/productsinfo/ProductInfo'
import Details from './components/details/Details'



function App() {
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<HomePage/>}></Route>
        <Route path='products' element={<CoProduct/>}></Route>
        <Route path='products/:id' element={<ProductInfo/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='details' element={<Details/>}></Route>
      <Route path='contact'element={<Contact/>}></Route>
      </Route>
    </Routes>
   </div>
    
  )
}

export default App
