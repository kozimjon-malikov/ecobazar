import React from 'react'
import Services from './components/service/service'
import Category from './components/category/category'
import Products from './components/products/products'
import './assets/styles/main.css'
import FeaturedProducts from './components/features/features'
import News from './components/news/news'
import Testimonials from './components/testimonials/testimonials'
import Partners from './components/partners/partners'
import Footer from './components/footer/footer'
import Social from './components/social/social'
export default function App() {
  return (
    <div className='my-5'>
      <div className='custom-container'>
        <Social />
        <Partners />
        <Testimonials />
        <News />
        <FeaturedProducts />
        <Services />
        <Products />
        <Category />
      </div>
      <Footer />
    </div>
  )
}
