import Hero from "@/components/home/hero";
import ShopByCategory from "@/components/home/shopbycategory";
import TrendingProducts from "@/components/home/TrendingProducts";
import NewArrivals from "@/components/home/NewArrivals";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import Testimonials from "@/components/home/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      
      <main className="flex-1">
        <Hero />
        <ShopByCategory />
        <TrendingProducts />
        <NewArrivals />
        <WhyShopWithUs />
        <Testimonials />
      </main>
    </div>
  );
}
