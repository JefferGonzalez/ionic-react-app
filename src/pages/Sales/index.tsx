import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import ExploreContainer from '../../components/ExploreContainer'
import './main.css'

const Sales: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name='Tab 3 page' />
      </IonContent>
    </IonPage>
  )
}

export default Sales
