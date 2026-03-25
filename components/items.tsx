"use client"

import Link from "next/link";
import { useState } from "react"
const FeatureListPage = () => {
    interface Item {
        id: number;
        title: string;
        paragraph: string;
        image: string;
        btn: string;
    }

    const [items, setItems] = useState <Item[]> ([{
        id: 1,
        title:"Unparalleled Sound",
        paragraph:"Crystal-clear sound with deep bass.",
        image:"/item1.png",
        btn:"Shop Now"
    },
    {
         id: 2,
        title:"Stay Connected",
        paragraph:"Fast and stable Bluetooth pairing.",
        image:"/earpods.png",
        btn:"Shop Now"
    },
    {
         id: 3,
        title:"Power in Every Pixel",
        paragraph:"Sharp display with vibrant colors.",
        image:"/laptopholder.png",
        btn:"Shop Now"
    }

])
    return(
        <div>
            <div>
                <h2 className="feature-list-title">Featured Products</h2>
                <p className="line-feature-title"></p>
            </div>
            <div className="container-items">
                {items.map((item)=>{
                    return(
                        <div className="item1" key={item.id}>
                            <div className="img-item1">
                                <img src={item.image} alt={item.title} className="img-item1" />
                            </div>
                            <div className="item-info">
                                <h3 className="title-item1">{item.title}</h3>
                                 <p className="paragraph-item">{item.paragraph}</p>
                                <Link href="/all-products">
                                     <button className="btn-item1">
                                        {item.btn}
                                        <i className="fa-regular fa-share-from-square"></i>
                                    </button>
                                </Link>
                            </div>
                                
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}
export default FeatureListPage