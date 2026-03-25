"use client"
import Link from "next/link"
import { useSelector } from "react-redux"

import type { RootState } from "@/app/store/store"


const Navbar = () => {
  
 

// const {counter} = useSelector((state: RootState) => state.counter)
const cartitems=useSelector((state:RootState)=>state.cart.items)
const count = cartitems.reduce(
 (total,item)=> total + item.quantity,
 0
)
  return (
    <div>
        <nav className="nav-home">
          <h2><span>Q</span>uickCart</h2>

          <div className="links-home">
            <Link href="/">Home</Link>
            <Link href="/all-products">Shop</Link>
            <Link href="/About">About us</Link>
            <Link href="/Contact">Contact</Link>
            <button>Seller Dashboard</button>
          </div> 

              
          <div className="icons-home">
            
            <div>
              <div className="circle"><p>{count}</p></div>
              <Link href={"../cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <p>Account</p>
          </div>
        </nav>
    </div>
  )
}
export default Navbar