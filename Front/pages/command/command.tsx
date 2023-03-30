import Footer from "../composant/footer";
import Header from "../composant/header";
const datas = require("../../fichier.json")
import Image from 'next/image'

export default function Home(){
  
  console.log(datas)

  return(
    <>
      <Header />

      <div>
      {datas.map((data) => {
          return (
          <>
          <h1>{data.name}</h1>
          <Image src={data.image} alt={data.name} width={200} height={200} />
          <h3>{}</h3>
          </>
          
          )
        })}
      </div>

      <Footer/>
    </>
  )
}