"use client"

import Link from "next/link"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/app/store/store"
import { increaseQty ,decreaseQty,removeFromCart} from "../store/cartslice"


export default function Cart() {

  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  )

  const subtotal = cartItems.reduce(
    (acc,item)=> acc + item.price * item.quantity,
    0
  )

  const tax = subtotal * 0.02
  const total = subtotal + tax

  if(cartItems.length === 0){
    return(
      <div style={{textAlign:"center",marginTop:"100px"}}>
        <h2>Your Cart is Empty</h2>

        <Link
          href="/all-products"
          className={styles.ContinueShopping}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Go Shopping
        </Link>

      </div>
    )
  }

  return (
    <div>
      <div className={styles.container}>
        
        <div className={styles.itemsincart}>

          <div className={styles.titlecart}>
            <h2 className={styles.yourcart}>
              Your <span>order</span>
            </h2>

            <p>{cartItems.length} item</p>
          </div>

          <hr/>

          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.firsttd}>Product Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>

            {cartItems.map((item)=>{

              const subtotalItem = item.price * item.quantity

              return(

                <tr
                  key={item.id}
                  className={styles.secondrow}
                >

                  <td className={styles.secondtd}>

                    <img
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={100}
                    />

                    <div>
                      <p>{item.title}</p>

                      <button
                        onClick={()=>
                          dispatch(removeFromCart(item.id))
                          
                        }
                        className={styles.btnremove}
                      >
                        remove
                      </button>
                    </div>

                  </td>

                  <td>
                    ${item.price.toFixed(2)}
                  </td>

                  <td className={styles.quantity}>

                    <button
                      onClick={()=>
                        dispatch(decreaseQty(item.id))
                      }
                    >
                      ◀
                    </button>

                    <span style={{margin:"0 10px"}}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={()=>
                        dispatch(increaseQty(item.id))
                      }
                    >
                      ▶
                    </button>

                  </td>

                  <td>
                    ${subtotalItem.toFixed(2)}
                  </td>

                </tr>

              )
            })}

            </tbody>
          </table>

          <Link href={"/all-products"}>
            <i className="fa-solid fa-arrow-left"></i>
            Continue Shopping
          </Link>

        </div>

        <div className={styles.ordersummery}>

          <h2 className={styles.titleorder}>
            order summary
          </h2>

          <hr/>

          <p>Select Address</p>

          <select
            defaultValue=""
            onChange={(e)=>{
              const value = e.target.value
              if(value) router.push(value)
            }}
          >

            <option value="" disabled hidden>
              Select Address
            </option>

            <option value="/addaddres">
              add a new address
            </option>

          </select>

          <p>promo code</p>

          <input
            type="text"
            placeholder="Enter a promo code"
          />

          <button className={styles.btn}>
            apply
          </button>

          <hr/>

          <div className={styles.div3order}>
            <p>Price</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className={styles.div3order}>
            <p>Shipping Fee</p>
            <p>FREE</p>
          </div>

          <div className={styles.div3order}>
            <p>Tax (2%)</p>
            <p>${tax.toFixed(2)}</p>
          </div>

          <hr/>

          <div className={styles.div4order}>
            <p>Total</p>

            <p className={styles.totalprice}>
              ${total.toFixed(2)}
            </p>
          </div>

          <button className={styles.btnorder}>
            Place Order
          </button>

        </div>

      </div>
    </div>
  )
}