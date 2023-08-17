import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import ExploreContainer from '../../components/ExploreContainer'
import './main.css'

const Invoices: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Invoices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Tab 3 page' />
      </IonContent>
    </IonPage>
  )
}

export default Invoices
