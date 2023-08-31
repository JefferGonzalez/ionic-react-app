import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { type Product } from '../services/Products'
import ProductCard from './ProductCard'

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <IonGrid>
      <IonRow>
        {products.map((product) => (
          <IonCol key={product.id} size='6' size-md='4' size-lg='3' size-xl='2'>
            <ProductCard product={product} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  )
}
