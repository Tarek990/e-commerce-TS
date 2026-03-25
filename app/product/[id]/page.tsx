"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import PopularProducts from "@/app/popular-products/page"
import styles from "@/app/product/[id]/page.module.css"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/app/store/store"

import { getItembyId } from "@/app/store/itemsSlice"
import { addToCart } from "@/app/store/cartslice"
import { increment } from "@/app/store/counterSlice"


export default function ProductPage() {

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const { item, isLoading } = useSelector(
    (state: RootState) => state.items
  )

  const params = useParams()
  const id = params.id

  useEffect(() => {
    if (id) {
      dispatch(getItembyId(Number(id)))
    }
  }, [id, dispatch])


  function addItemToCart() {

    if (item) {

      dispatch(addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1
      }))

      alert("Added to cart")

    }

  }


  function buyNow() {

    if (item) {

      dispatch(addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1
      }))

      if(item){
        dispatch(increment())
      }

    }

  }


  if (isLoading) return <p>loading...</p>
  if (!item) return <p>product not found</p>

  return (

    <div>

      <div className={styles.container}>

        <div className={styles.img1productitem}>

          <img
            src={item.image}
            alt={item.title}
            className={styles.img1}
          />

          <div className={styles.img2productitem}>

            <img
              src={item.image}
              alt={item.title}
              width={120}
              height={180}
            />

          </div>

        </div>


        <div className={styles.productiteminfo}>

          <h2>{item.title}</h2>

          <p className={styles.rateofitem}>
            ({item.rating.rate})

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

          </p>

          <p className={styles.countforitem}>
            the count is : {item.rating.count}
          </p>

          <p className={styles.descriptionforitem}>
            {item.description}
          </p>

          <p className={styles.itemprice}>
            ${item.price} <del>$30</del>
          </p>

          <hr />

          <div>
            <p className={styles.categoryitem}>
              category: {item.category}
            </p>
          </div>


          <div className="btns-product-item">

            <button
              className={styles.btn1productitem}
              onClick={addItemToCart}
            >
              add to cart
            </button>

            <button
              className={styles.btn2productitem}
              onClick={buyNow}
            >
              buy now
            </button>

          </div>

        </div>

      </div>


      <div>
        <PopularProducts />
      </div>

    </div>

  )

}