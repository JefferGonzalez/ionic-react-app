import { IonItem, IonLabel, IonList } from '@ionic/react'

const Products = [
  {
    name: 'Product 1',
    price: 10
  },
  {
    name: 'Product 2',
    price: 20
  },
  {
    name: 'Product 3',
    price: 30
  },
  {
    name: 'Product 4',
    price: 40
  },
  {
    name: 'Product 5',
    price: 50
  },
  {
    name: 'Product 6',
    price: 60
  },
  {
    name: 'Product 7',
    price: 70
  },
  {
    name: 'Product 8',
    price: 80
  },
  {
    name: 'Product 9',
    price: 90
  },
  {
    name: 'Product 10',
    price: 100
  }
]

export default function ProductsList() {
  return (
    <IonList inset={true}>
      {Products.map((product, index) => (
        <IonItem key={index}>
          <IonLabel>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}
