import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductInfo(props) {
  return (
      <div className={styles.InfoBox}>
        <Image src={props.img} alt={props.name} width={400} height={400} />
        <div className={styles.productInfo}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <div className={styles.price}>
            <p>à partir de </p>
            <h4>{props.price} €</h4>
          </div>
        </div>
      </div>
  )
}
