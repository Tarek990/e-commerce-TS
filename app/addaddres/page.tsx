import styles from "./page.module.css"
import Image from "next/image"
export default function page() {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.titleaddres}>Add Shipping <span>Address</span></h2>
        </div>
        <div className={styles.containerinputes}>
          <div>
            <input type="text" placeholder="Full Name" className={styles.inp1}/>
          </div>
          <div>
            <input type="text" placeholder="Phone number" className={styles.inp1}/>
          </div>
          <div>
            <input type="text" placeholder="Pin code" className={styles.inp1}/>
          </div>
          <div>
            <input type="text" placeholder="Address (Area and Street)" className={styles.Address}/>
          </div>
          <div>
            <input type="text" placeholder="City/District/Town" className={styles.inp2}/>
            <input type="text" placeholder="State" className={styles.inp2}/>
          </div>
          <div className={styles.divbtn}>
            <button className={styles.btn}>Save Address</button>
          </div>
        </div>
        
      </div>
      <div>
        <Image src="/address.png" alt="address" width={300} height={450}/>
      </div>
    </div>

  )
}
