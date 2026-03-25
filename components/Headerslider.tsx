"use client"
import { useState ,useEffect, type JSX} from "react"
 import img from "@/assets/headset.png"
 import img2 from "@/assets/laptop.png"
 import img3 from "@/assets/ps5.png"
import Link from "next/link"

export default function Maincontent():string|JSX.Element {
    const[index,setindex]=useState(0)
     const slides :number[]= [1,2,3]; 

useEffect(() => {
  const interval = setInterval(() => {
    setindex((prev) => (prev + 1) % slides.length);
  }, 6000);

  return () => clearInterval(interval);
}, []);


  return (
    <div style={{position:"relative"}}>
        <div className="container">
            
            <div className="slider" style={{
        transform: `translateX(-${index * 100}%)`,
        transition: "0.5s"
        }}> 
                <div className="cuirsor1">
                    <div className="cuirsor1-info"> 
                        <p className="p1-cuirsor1">Limited Time Offer 30% Off</p>
                        <p className="p2-cuirsor1">Experience Pure Sound - Your Perfect Headphones Awaits!</p>
                       <Link href={"/cart"}>
                             <button className="btn1-info-cuirsor">Buy now</button>
                       </Link>
                        <Link href={"/all-products"}>
                            <button className="btn2-info-cuirsor">Find more <i className="fa-solid fa-arrow-right"></i> </button>
                        </Link>
                    </div>

                    <div>
                        <img src = {img.src} alt="Image"/>
                    </div>
                </div>
                <div className="cuirsor1">
                    <div className="cuirsor1-info"> 
                        <p className="p1-cuirsor1">Hurry up only few lefts!</p>
                        <p className="p2-cuirsor1">Next-Level Gaming Starts Here - Discover PlayStation 5 Today!</p>
                        <Link href={"/cart"}>
                             <button className="btn1-info-cuirsor">Buy now</button>
                       </Link>
                        <Link href={"/all-products"}>
                            <button className="btn2-info-cuirsor">Explore Deals <i className="fa-solid fa-arrow-right"></i> </button>
                        </Link>
                    </div>

                    <div>
                        <img src={img3.src} alt="Image"/>
                    </div>
                </div>
                <div className="cuirsor1">
                    <div className="cuirsor1-info"> 
                        <p className="p1-cuirsor1">Exclusive Deal 40% Off</p>
                        <p className="p2-cuirsor1">Power Meets Elegance - Apple MacBook Pro is Here for you!</p>
                        <Link href={"/cart"}>
                             <button className="btn1-info-cuirsor">Buy now</button>
                       </Link>
                        <Link href={"/all-products"}>
                            <button className="btn2-info-cuirsor">Learn More<i className="fa-solid fa-arrow-right"></i> </button>
                        </Link>
                    </div>

                    <div>
                        <img src={img2.src} alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="btns">
            <button className="btns-to-next" onClick={()=>setindex((prev) => (prev+1)%3)}></button>
            <button className="btns-to-next" onClick={()=>setindex((prev) => (prev+1)%3)}></button>
            <button className="btns-to-next" onClick={()=>setindex((prev) => (prev+1)%3)}></button>
        </div>
        
    </div>
  )
}
