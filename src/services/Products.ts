import { collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore'
import { db} from '../database/Firebase'

export interface Product {
  id?: string
  name: string
  photo: string
  price: number
}

const productsCollection = collection(db, 'products')

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products: Product[] = []
    const querySnapshotToProducts = await getDocs(productsCollection)
    querySnapshotToProducts.forEach((doc) => {
      products.push({
        id: doc.id,
        name: doc.get('name'),
        photo: doc.get('photo'),
        price: doc.get('price')
      })
    })

    return products
  } catch (e) {
    throw new Error("Couldn't get products.")
  }
}

export const getProduct = async (id: string): Promise<Product> => {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      name: docSnap.get('name'),
      photo: docSnap.get('photo'),
      price: docSnap.get('price')
    }
  }
  throw new Error('Product not found.')
}

export const addProduct = async (product: Product): Promise<void> => {
  try {
    await addDoc(productsCollection, product)
  } catch (e) {
    throw new Error("Couldn't add product.")
  }
}
