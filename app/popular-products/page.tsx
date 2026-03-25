"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { decrement, increment } from "../store/counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { getallitems } from "../store/itemsSlice"
import type { RootState } from "@/app/store/store"
import type { AppDispatch } from "@/app/store/store"



const PopularProducts = () => {


  interface Product{
  id: number;
  title: string;
  image: string;
  price: number;

}
const dispatch = useDispatch<AppDispatch>()
const {data,isLoading,error}=useSelector((state:RootState)=>state.items)



  const [visibleProducts,setVisibleProducts] = useState(10)

  useEffect(()=>{
    
    dispatch(getallitems())
    
  },[dispatch])

  return (
    <>
    <h2 className="products-title">Popular Products</h2>
      <div className="container-allproducts">
        
        {data.slice(0, 10).map((product : Product)=>(
          <div key={product.id} className="div-products">

            <div className="div-products-img">
              <img 
                src={product.image} 
                alt={product.title} 
                width={190} 
                height={250}
              />
              
            </div>
              <i className="fa-regular fa-heart"></i>
            <div className="info-products">
              <h2>{product.title}</h2>

              <div className="price-btn">
                <p>${product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="btn-buy" onClick={()=>dispatch(increment())}>Buy Now</button>
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>

      {visibleProducts < data.length && (
    <div style={{textAlign:"center", marginTop:"20px"}}>
    <Link href="/all-products" className="show-more-btn">
      Show All Products
    </Link>
  </div>
)}
    </>
  )
}

export default PopularProducts