/*import RootLayout from "@/components/layout/RootLayout";
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from "@/components/ui/Carousel";
import PopularCategories from "@/components/sections/PopularCategories";
import BestOffers from "@/components/sections/BestOffers";
import BestSellers from "../components/sections/BestSellers";
import KacirilmayacakFirsatlar from "../components/sections/KacirilmayacakFirsatlar";
import SonIncelenenler from "@/components/sections/SonIncelenenler";
import NedenPasaj from "@/components/sections/NedenPasaj";
import PopularBrands from "@/components/sections/PopularBrands";
*/
import RootLayout from "@/components/layout/RootLayout";
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "@/components/ui/Carousel";
import PopularCategories from "@/components/sections/PopularCategories";
import BestOffers from "@/components/sections/BestOffers";
import BestSellers from "@/components/sections/BestSellers";
import KacirilmayacakFirsatlar from "@/components/sections/KacirilmayacakFirsatlar";
import SonIncelenenler from "@/components/sections/SonIncelenenler";
import NedenPasaj from "@/components/sections/NedenPasaj";
import PopularBrands from "@/components/sections/PopularBrands";
import PromoBanner from "@/components/layout/PromoBanner";
import Kampanyalar from "@/components/sections/Kampanyalar";


export default function Home() {
  return (
    <RootLayout>
      <main>
        <CustomCarousel/>
        <PopularCategories/>
        <PromoBanner/>
        <BestOffers/>
        <Kampanyalar/>
        <BestSellers/>
        <PopularBrands/>
        <KacirilmayacakFirsatlar/>
        <SonIncelenenler/>
        <NedenPasaj/>
      </main>
    </RootLayout>
  );
}




