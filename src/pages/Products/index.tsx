import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import ExploreContainer from '../../components/ExploreContainer'
import './main.css'
import ProductsList from '../../components/ProductsList'

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProductsList />
      </IonContent>
    </IonPage>
  )
}

export default Products
