// import console from 'console'
import { api } from './requete'

const fetchProduct = async () => {
  return await api.get('/product/').then((response) => response.data)
}

const fetchProductbyIdCategory = async (idCategory) => {
  return await api.get('/product/byCategories/' + idCategory).then((response) => response.data)
}
// const fetchProductbyID = async (id) => {
//   return await api.get('/product/' + id).then((response) => response.data)
// }

export async function fetchProductbyID () {
  const posts = await fetch('http://localhost:3550/product/').then(r => r.json())
  return {
    paths : posts.map(post => ({
      params : {
        id: post.id.toString()
      }
    }))
  }
}

export { fetchProduct, 
  // fetchProductbyID,
   fetchProductbyIdCategory }
