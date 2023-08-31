import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/ProductCard'
import { Product, getProduct } from '../../services/Products'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'

const ShowProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product>()
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((e) => setMessage(e.message))
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Show Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {message && <p>{message}</p>}
        {product && (
          <div
            style={{
              width: '80%',
              margin: 'auto'
            }}
          >
            <ProductCard product={product} showLink={false} />
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default ShowProduct
