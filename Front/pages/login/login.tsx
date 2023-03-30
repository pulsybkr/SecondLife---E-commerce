import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styleslogin from '../../styles/Login.module.css'
import HeadCompoment from '../composant/header'
import Footer from '../composant/footer'
import Link from 'next/link'

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  return (
    <div className={styles.container}>
      <>
        {/* header et head */}
        <HeadCompoment />
        {/* corps de la page de l'index */}
        <h1 className={styleslogin.titlelogin}>Hello, cher humain</h1>
        <div className={styleslogin.login}>
          {/* connexion */}
          <div className={styleslogin.auth}>
            <h2>J'ai déjà un compte.</h2>

            <form action="">
              <div>
                <input type="text" placeholder="nom" id="name" name="name" />
              </div>
              <div>
                <input type="password" placeholder="Mot de passe" name="password" id="password" />
              </div>
              <div className={styleslogin.buttonlogin}>
                <button type="submit">Welcome Back!</button>
              </div>
            </form>
          </div>

          {/* new compte */}
          <div className={styleslogin.register}>
            <h2>Nouveau client ? Par ici, s'il vous plaît.</h2>
            <form action="">
              <div>
                <div>
                  <input type="text" placeholder="nom" id="name" name="name" />
                </div>
                <div>
                  <input type="email" placeholder="mail@example.com" id="email" name="email" />
                </div>
                <div>
                  <input type="number" placeholder="0666666677" name="number" id="number" />
                </div>
                <div>
                  <input type="password" placeholder="Mot de passe" name="password" id="password" />
                </div>
              </div>
              <div className={styleslogin.forminfo}>
                <div className={styleslogin.accepte}>
                  <input type="checkbox" name="accepte" id="accepte" />
                  <label htmlFor="accepte">
                    J’accepte de recevoir les meilleurs plan du web et la newsletter par mail.
                  </label>
                </div>
                <div>
                  <p>
                    En créant votre compte vous acceptez les Conditions générales d'utilisation, les Conditions
                    générales de vente et la politique de confidentialité de Second Life et confirmez avoir plus de 16
                    ans.
                  </p>
                </div>
              </div>
              <div className={styleslogin.buttonlogin}>
                <button type="submit">Enchantés !</button>
              </div>
              <p className={styleslogin.textlogin}>
                Ces champs sont obligatoires et destinés à Second Life, responsable du traitement, aux fins d'effectuer
                les opérations relatives à notre relation commerciale. Vous disposez, entre autres, d'un droit d'accès,
                de rectification, de limitation, de suppression et le cas échéant d'opposition à la prospection
                commerciale par email et/ou par sms, sur vos données personnelles. Pour plus d'informations, veuillez
                consulter notre politique de confidentialité
              </p>
            </form>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </>
    </div>
  )
}
