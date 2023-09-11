import { IonAlert } from '@ionic/react';

interface AlertProps {
  isOpen: boolean
  title: string
  message: string
  
}

export default function Alert({ isOpen, title, message }: AlertProps) {
  return (
    <IonAlert
      isOpen={isOpen || false}
      header={title}
      message={message}
      buttons={['OK']}
      onDidDismiss={() =>
        setAlert({
          isOpen: false,
          title: '',
          message: ''
        })
      }
    ></IonAlert>
  )
}
