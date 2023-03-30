import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeadCompoment() {
  return (
    <div>
      <Head>
        <title>Second_life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          <Image
            src="/favicon.ico"
            alt="Picture of the author"
            // className={styles.logo}
            width={50}
            height={50}
          />
        </div>

        <div>
          <Link href="../" className={styles.link}>
            Accueil
          </Link>
          <Link href="../product/product" className={styles.link}>
            Product
          </Link>
          <Link href="../login/login" className={styles.link}>
            Login
          </Link>
          <Link href="../command/command" className={styles.link}>
            Command
          </Link>
        </div>
      </header>
    </div>
  )
}
