import { useState } from 'react'
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import './main.css'
import { Link } from 'react-router-dom'

interface Alert {
  isOpen: boolean
  title: string
  message: string
}

export default function Login() {
  const [alert, setAlert] = useState<Alert>({
    isOpen: false,
    title: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const username = data.get('username')
    const password = data.get('password')

    if (username === '' || password === '') {
      setAlert({
        isOpen: true,
        title: 'Error',
        message: 'Username or password is empty'
      })

      return
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic with React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={alert.isOpen || false}
          header={alert.title}
          message={alert.message}
          buttons={['OK']}
          onDidDismiss={() =>
            setAlert({
              isOpen: false,
              title: '',
              message: ''
            })
          }
        ></IonAlert>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle
              style={{
                textAlign: 'center'
              }}
            >
              Welcome
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonInput name='username' placeholder='Username' type='text' />
              <IonInput
                name='password'
                placeholder='Password'
                type='password'
              />
              <IonButton
                type='submit'
                expand='block'
                style={{
                  margin: '1rem'
                }}
              >
                Login
              </IonButton>
            </form>

            <IonCardSubtitle
              style={{
                textAlign: 'center'
              }}
            >
              <Link to='/auth/forgot-password'>Forgot Password?</Link>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}
