import Link from "next/link"
import styles from "./footer.module.css"
const Footer = () => {
    console.log(styles)
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.div1footer}>
                <h2 className={styles.titlefooter}><span>Q</span>uickCart</h2>
                <p>We provide high-quality products and a seamless shopping experience, helping you discover the latest trends and best deals in one place.</p>
            </div>
            <div className={styles.div2footer}>
                <h3 className={styles.titlefooter}>Company</h3>
                <Link href="/">Home</Link>
                <Link href="#">About us</Link>
                <Link href="#">Contact us</Link>
                <Link href="#">Privacy policy</Link>
            </div>
            <div className={styles.div2footer}>
                <h3 className={styles.titlefooter}>Get in touch</h3>
                <p>+1-234-567-890</p>
                <p>contact@greatstack.dev</p>
            </div>
        </div>
        <hr/>
        <div className={styles.copyright}>
            <p>© 2026 Your Company. All rights reserved. Designed to provide the best experience for our users.</p>
        </div>
    </div>
  )
}
export default Footer