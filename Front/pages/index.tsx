import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadCompoment from './composant/header'
import Products from './composant/productCompoment'
import Footer from './composant/footer'
const data = require('../fichier.json')

export default function Home() {
  return (
    <div className={styles.container}>
      <>
        {/* header et head */}
        <HeadCompoment />

        {/* corps de la page de l'index */}
        <div className={styles.index}>
          <main id={styles.main}>
            <div className={styles.pubcontenair}>
              <video muted autoPlay loop className={styles.video}>
                <source src="/bkg.mp4" />
              </video>
              <div className={styles.textvideo}>
                <h1>Il parait que c'est la black Friday </h1>
                <p>Chez nous c'est vendredi tous les jours </p>
                <button>
                  <a href="./product/product">Voir Nos Produits</a>
                </button>
              </div>
            </div>
            <section className={styles.sectionmain}>
              <div className={styles.mainleft}>
                <h2>Notre mission : rendre les produits reconditionnés aussi fiables que désirables.</h2>
                <div className={styles.contmain}>
                  <p>Ni neuf, ni d'occasion.</p>
                  <h3>Re-con-di-tio-nné</h3>
                  <Image
                    src="/iphone.jpg"
                    alt="Iphone 12"
                    // className={styles.logo}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <div className={styles.mainright}>
                <h2>Nos meilleures ventes</h2>
                <div className={styles.bestVente}>
                  <Products
                    name={data[1].name}
                    description={data[1].description}
                    price={data[1].price}
                    img={data[1].image}
                  />
                  <Products
                    name={data[23].name}
                    description={data[23].description}
                    price={data[23].price}
                    img={data[23].image}
                  />
                  <Products
                    name={data[16].name}
                    description={data[16].description}
                    price={data[16].price}
                    img={data[16].image}
                  />
                  <Products
                    name={data[4].name}
                    description={data[4].description}
                    price={data[4].price}
                    img={data[4].image}
                  />
                </div>
              </div>
            </section>
          </main>
          <section className={styles.index}>
            <div className={styles.parent}>
              <div className={styles.div1}> </div>
              <div className={styles.div2}> </div>
              <div className={styles.div3}> </div>
              <div className={styles.div4}> </div>
              <div className={styles.div5}> </div>
            </div>
          </section>
        </div>

        {/* footer */}
        <Footer />
      </>
    </div>
  )
}
