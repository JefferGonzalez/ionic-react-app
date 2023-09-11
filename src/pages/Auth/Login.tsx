import {
  IonButton,
  IonButtons,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import './main.css'
import Layout from '../Layout'

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
    <Layout id='main-content' title='Ionic with React App'>
      <Card title='Welcome (Work in progress)'>
        <form onSubmit={handleSubmit}>
          <IonInput
            id='username'
            name='username'
            label='Username'
            placeholder='Enter your username'
            type='text'
            clearInput={true}
            required
          />
          <IonInput
            id='password'
            name='password'
            label='Password'
            placeholder='Enter your password'
            type='password'
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
      </Card>
    </Layout>
  )
}
