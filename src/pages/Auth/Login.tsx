import { useState } from 'react'
import {
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

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic with React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
            <IonInput
              name='username'
              placeholder='Username'
              type='text'
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              name='password'
              placeholder='Password'
              type='password'
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton
              expand='block'
              style={{
                margin: '1rem'
              }}
              onClick={() =>
                alert(`Username: ${username} Password: ${password}`)
              }
            >
              Login
            </IonButton>

            <IonCardSubtitle
              style={{
                textAlign: 'center'
              }}
            >
              <a href='/'>Forgot Password?</a>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}
