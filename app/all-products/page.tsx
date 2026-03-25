"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
interface Product{
  id: number
  title: string
  image: string
  price: number
}

const Products = () => {

  const [products,setproducts] = useState<Product[]>([])
  

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=> setproducts(res.data))
    .catch((error)=> console.log(error))
  },[])

  return (
    <>
    <h2 className="products-title">All Products</h2>
      <div className="container-allproducts">

        {products.map((product)=>(
          <div key={product.id} className="div-products">

            <div className="div-products-img">
              <img 
                src={product.image} 
                alt={product.title} 
                width={190} 
                height={250}
              />
            </div>

            <div className="info-products">
              <h2>{product.title}</h2>

              <div className="price-btn">
                <p>${product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="btn-buy">Buy Now</button>
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>

      
    

    </>
  )
}

export default Products