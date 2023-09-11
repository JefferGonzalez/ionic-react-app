import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Card from '../../components/Card'

interface AddProductProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function AddProduct({ isOpen, setIsOpen }: AddProductProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
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
            Add Product (Work in progress)
          </IonTitle>
          <IonButtons slot='end'>
            <IonButton strong={true} onClick={() => setIsOpen(false)}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <Card>
          <form onSubmit={handleSubmit}>
            <IonInput
              id='name'
              name='name'
              label='Name'
              placeholder='Enter name of product'
              type='text'
              errorText='Invalid text'
              clearInput={true}
              required
            />
            <IonInput
              id='price'
              name='price'
              label='Price'
              placeholder='Enter price of product'
              type='number'
              clearInput={true}
              required
            />
            <IonInput
              id='photo'
              name='photo'
              label='Photo'
              placeholder='Enter photo of product'
              type='url'
              clearInput={true}
              required
            />
            <IonButton
              type='submit'
              expand='block'
              style={{
                margin: '1rem'
              }}
            >
              Add
            </IonButton>
          </form>
        </Card>
      </IonContent>
    </IonModal>
  )
}
