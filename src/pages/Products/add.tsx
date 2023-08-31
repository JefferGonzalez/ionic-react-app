import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react'

interface AddProductProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function AddProduct({ isOpen, setIsOpen }: AddProductProps) {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
          </IonButtons>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >
            Welcome
          </IonTitle>
          <IonButtons slot='end'>
            <IonButton strong={true} onClick={() => setIsOpen(false)}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>
          Welcome to <strong>My App</strong>
        </h1>
      </IonContent>
    </IonModal>
  )
}
