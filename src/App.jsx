import React, { useEffect } from 'react'
import './assets/styles/main.css'
import Footer from './components/footer/footer'
import { Header } from './components/header/header'
import { TopHeader } from './components/header/topheader'
import Topbar from './components/header/topbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import { useDispatch } from 'react-redux'
import { loadProducts } from './redux/actions/loadProducts'
export default function App() {
  const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadProducts())
    },[])
  return (
    <BrowserRouter>
      <Topbar />
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Layout/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
