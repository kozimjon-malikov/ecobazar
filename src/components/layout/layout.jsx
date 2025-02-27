import React from "react";
import { HeroSection } from "../hero/hero";
import Services from "../service/service";
import Category from "../category/category";
import Products from "../products/products";
import SaleSection from "../sale/sale";
import { DealsSection } from "../deals/deals";
import { DiscountSection } from "../discount/discount";
import FeaturedProducts from "../features/features";
import NewsSection from "../news/news";
import Testimonials from "../testimonials/testimonials";
import Partners from "../partners/partners";
import SocialSection from "../social/social";
import SubscribeSection from '../subscribe/subscribe'
export default function Layout() {
  return (
    <>
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
    </>
  );
}
