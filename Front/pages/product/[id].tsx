/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-fallthrough */
import { api } from '../../services/requete'
import Footer from '../composant/footer'
import Header from '../composant/header'
import style from '../../styles/Prod.module.css'
// import Image from 'next/image'
import {
  // useEffect,
  useState
} from 'react'
import Condition from '../composant/condition'
import Color from '../composant/color'

export default function Post({ post }) {
  const produit = post[0]

  //  choix de l'image
  const [img, setImg] = useState(produit.image1)
  const selectImg = (chemin) => {
    setImg(chemin)
  }

  // condition ou etat du telephone

  let condition
  if (produit.condition === 1) {
    condition = (
      <Condition
        cond3={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="Parfait état"
        namecond2="Très bon état"
        namecond3="Etat correct"
      />
    )
  } else if (produit.condition === 2) {
    condition = (
      <Condition
        cond2={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="Parfait état"
        namecond2="Très bon état"
        namecond3="Etat correct"
      />
    )
  } else if (produit.condition === 3) {
    condition = (
      <Condition
        cond1={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="Parfait état"
        namecond2="Très bon état"
        namecond3="Etat correct"
      />
    )
  }

  // capacité de stockage du telephone
  let capacite
  if (produit.capacity === 64) {
    capacite = (
      <Condition
        cond3={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="64 Go"
        namecond2="128 Go"
        namecond3="256 Go"
      />
    )
  } else if (produit.capacity === 128) {
    capacite = (
      <Condition
        cond2={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="64 Go"
        namecond2="128 Go"
        namecond3="256 Go"
      />
    )
  } else if (produit.capacity === 256) {
    capacite = (
      <Condition
        cond1={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }}
        namecond1="64 Go"
        namecond2="128 Go"
        namecond3="256 Go"
      />
    )
  }
  // affichage des couleurs
  let color
  if (produit.color === 'rouge') {
    color = <Color colorrouge={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'jaune') {
    color = <Color colorjaune={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'bleu') {
    color = <Color colorbleu={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'blanc') {
    color = <Color colorblanc={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'noir') {
    color = <Color colornoir={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'vert') {
    color = <Color colorvert={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  } else if (produit.color === 'rose') {
    color = <Color colorrose={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  }
  // switch (produit.color) {
  //   case 'rouge':
  //     color = <Color colorrouge={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   case 'jaune':
  //     color = <Color colorjaune={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   case 'bleu':
  //     color = <Color colorbleu={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   case 'blanc':
  //     color = <Color colorblanc={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   case 'vert':
  //     color = <Color colorvert={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   case 'noir':
  //     color = <Color colornoir={{ border: '1px solid #000000', background: '#C2C2C2', color: '#000' }} />
  //   default:
  //     color = <Color />
  // }

  // affiche de la galerie ou image en grand
  const [display, setDisplay] = useState(false)

  function galerieFloat(image) {
    setDisplay((prevDisplay) => !prevDisplay)
  }

  const [gal, setGal] = useState(produit.image1)
  const selectGal = (chemin) => {
    setGal(chemin)
  }

  return (
    <>
      <Header />
      <main>
        <div style={{ display: display ? 'flex' : 'none' }} className={style.float}>
          <div className={style.galeriefloat}>
            <img
              onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
              className={style.close}
              src="/close_.png"
              alt=""
            />
            <div className={style.gimg}>
              <img src={gal} alt="" />
            </div>
            <div className={style.pimg}>
              <img onClick={() => selectGal(produit.image1)} src={produit.image1} />
              <img onClick={() => selectGal(produit.image2)} src={produit.image2} />
              <img onClick={() => selectGal(produit.image3)} src={produit.image3} />
              <img onClick={() => selectGal(produit.image4)} src={produit.image4} />
            </div>
          </div>
        </div>
        <div className={style.contenair}>
          <div className={style.blocimg}>
            <div className={style.pimg}>
              <img onClick={() => selectImg(produit.image1)} src={produit.image1} />
              <img onClick={() => selectImg(produit.image2)} src={produit.image2} />
              <img onClick={() => selectImg(produit.image3)} src={produit.image3} />
              <img onClick={() => selectImg(produit.image4)} src={produit.image4} />
            </div>
            <div className={style.image}>
              <img src={img} onClick={() => galerieFloat(img)} />
            </div>
          </div>
          <div className={style.bloctext}>
            <div className={style.title}>
              <h1>{produit.name}</h1>
              <h2>{produit.price} €</h2>
            </div>
            <button>Ajouter au panier</button>
            <div className={style.condition}>
              <h2 className={style.h2}>Condition</h2>
              {condition}
            </div>
            <div className={style.capacity}>
              <h2 className={style.h2}>Stockage</h2>
              {capacite}
            </div>
            <div className={style.color}>
              <h2 className={style.h2}>Couleur</h2>
              {color}
            </div>
          </div>
        </div>
        <div></div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await api.get('/product/').then((response) => response.data)

  return {
    paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const response = await api.get('/product/' + params.id)
  return {
    props: {
      post: response.data
    }
  }
}
