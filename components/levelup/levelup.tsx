import Link from "next/link"
import styles from "./levelup.module.css"
const LevelUp = () => {
   
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img src="/jbl.png" alt="JBG sbeaker" width={150}/>
                </div>
                <div className={styles.infolevelup}>
                    <h2>Level Up Your Gaming Experience</h2>
                    <p>From immersive sound to precise controls—everything you need to win</p>
                    <Link href="/all-products">
                        <button className={styles.levelup}>
                            Buy now
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                <div>
                    <img src="/ps5controller.png" alt="ps5 controller" width={150}/>
                    <img src="/ps5.png" alt="ps5" width={150}/>
                </div>
            </div>
            <div className={styles.containersubscribe}>
                <div className={styles.titlesubscribe}>
                    <h2>Subscribe now & get 20% off</h2>
                    <p>Join our newsletter and stay updated with the latest products, exclusive offers, and special discounts.</p>
                </div>
                <div className={styles.subscribediv}>
                    <input type="email" placeholder="Enter your email" className="input-email"/>
                    <button className="btn-item1 subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default LevelUp