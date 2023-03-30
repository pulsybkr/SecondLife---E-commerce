import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Products(props) {
  return (
    <div className={styles.product}>
      <Image src={props.img} alt={props.name} width={150} height={150} />
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
