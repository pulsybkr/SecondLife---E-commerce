import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          Hello, Nous sommes Second Life nous donnons une deuxieme vie à tous les smartphones, pour lutter contre le
          gaspillage electronique et bien sur lutter contre le rechauffement climatique. Nous nous assurons de minimiser
          notre impact carbonne pour une ecologie meilleur, j'avoue que là j'ai dit du n'importe quoi. Mais bon
          l'ecologie c'est important. La lutte contre le gaspillage.
        </p>
        <h4>© 2022 Second Life</h4>
      </footer>
    </div>
  )
}
