import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel
} from '@ionic/react'
import { type Product } from '../services/Products'

interface ProductCardProps {
  product: Product
  showLink?: boolean
}

export default function ProductCard({
  product,
  showLink = true
}: ProductCardProps) {
  return (
    <IonCard>
      <img loading='lazy' src={product.photo} alt={product.name} />
      <IonCardHeader>
        <IonCardTitle>
          <IonLabel>{product.name + ' $' + product.price}</IonLabel>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {showLink && (
          <IonButton expand='block' routerLink={`/product/${product.id}`}>
            Show
          </IonButton>
        )}
      </IonCardContent>
    </IonCard>
  )
}
