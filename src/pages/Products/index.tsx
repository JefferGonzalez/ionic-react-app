import { useEffect, useState } from 'react'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { Product, getProducts } from '../../services/Products'
import ProductsList from '../../components/ProductsList'
import './main.css'
import ProductsToolbar from '../../components/ProductsToolbar'
import AddProduct from './add'

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error))
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >
            List Products
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProductsToolbar setIsOpen={setIsOpen} />
        <ProductsList products={products} />
        <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} />
      </IonContent>
    </IonPage>
  )
}

export default Products
