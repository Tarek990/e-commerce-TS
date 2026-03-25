"use client"
import Headerslider from "@/components/Headerslider"
import Navbar from "@/components/Navbar"
import Products from "./all-products/page";
import PopularProducts from "./popular-products/page";
import FeatureListPage from "../components/items";
import LevelUp from "@/components/levelup/levelup";
import Footer from "@/components/footer/footer";
import { Provider } from "react-redux";
import { Store } from "./store/store";




function Home() {
  
  return (
    <div>
      
      <div className={"flex items-center justify-center flex-wrap gap-10"}>
        <Headerslider />
        <PopularProducts />
        <FeatureListPage/>
        <LevelUp/>
        
      </div>
      
    </div>
  );
}
export default Home