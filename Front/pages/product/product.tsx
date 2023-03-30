// import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import stylesproduct from '../../styles/Product.module.css'
import { useState, useEffect, useRef } from 'react'
import HeadCompoment from '../composant/header'
import Products from '../composant/productCompoment'
import Footer from '../composant/footer'
import Link from 'next/link'
import { fetchProduct, fetchProductbyID, fetchProductbyIdCategory } from '../../services/products'
import { useRouter } from 'next/router'
import ProductInfo from '../composant/infoproduct'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const [datas, setDatas] = useState()

  const category = (idCategory) => {
    fetchProductbyIdCategory(idCategory).then((datas) => {
      setDatas(datas)
    })
  }

  const allproduct = () => {
    recupProduct()
  }

  useEffect(() => {
    recupProduct()
  }, [])

  function recupProduct() {
    fetchProduct().then((datas) => {
      console.log(datas)
      setDatas(datas)
    })
  }

  // affiche la commande sur une autre page

  function RecupId(id) {
    router.push('/product/' + id)
    console.log(id)
  }

  return (
    <div className={styles.container}>
      <>
        {/* header et head */}
        <HeadCompoment />

        {/* corps de la page de l'index */}
        <div className={styles.index}>
          <main id={styles.main}>
            <div className={stylesproduct.textTitle}>
              <h2>Smartphones reconditionnés</h2>
              <p>Selon une récente étude, les téléphones reconditionnés sont aussi plus intelligents.</p>
            </div>

            <section className={stylesproduct.productmain}>
              <div className={stylesproduct.productleft}>
                <h2>Tous les produits</h2>
                <div className={stylesproduct.contmain}>
                  <h3>Re-con-di-tio-nné</h3>
                  <div className={stylesproduct.contenairLink}>
                    <button onClick={() => allproduct()}>Tous les produits</button>
                    <button onClick={() => category(1)}>Iphone</button>
                    <button onClick={() => category(2)}>Samsung</button>
                    <button onClick={() => category(3)}>Huawei</button>
                  </div>
                </div>
              </div>
              <div className={stylesproduct.productright}>
                <div>
                  <div>
                    <ul className={stylesproduct.allproduct}>
                      {datas &&
                        datas.map((data) => {
                          return (
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                            <li
                              id="product"
                              key={data.id}
                              className={stylesproduct.productMain}
                              onClick={() => {
                                RecupId(data.id)
                              }}
                            >
                              {
                                <Products
                                  name={data.name}
                                  description={data.description}
                                  price={data.price}
                                  img={data.image1}
                                />
                              }
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        {/* footer */}
        <Footer />
      </>
    </div>
  )
}
