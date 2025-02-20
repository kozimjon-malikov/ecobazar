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
import Sale from './components/sale/sale'
import { Header } from './components/header/header'
import { TopHeader } from './components/header/topheader'
import Topbar from './components/header/topbar'
import { HeroSection } from './components/hero/hero'
import { DiscountSection } from './components/discount/discount'
import { DealsSection } from './components/deals/deals'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/toTop'
import SubscribeSection from './components/subscribe/subscribe'
import SocialSection from './components/social/social'
import NewsSection from './components/news/news'
import SaleSection from './components/sale/sale'
export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <TopHeader />
      <Header />
      <HeroSection />
      <Services />
      <Category />
      <Products />
      <SaleSection />
      <DealsSection />
      <DiscountSection />
      <FeaturedProducts />
      <NewsSection />
      <Testimonials />
      <Partners />
      <SocialSection />
      <SubscribeSection />
      <Footer />
    </BrowserRouter>
  )
}
