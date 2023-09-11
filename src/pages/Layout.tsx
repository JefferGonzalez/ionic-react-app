import { useContext } from 'react'
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { ThemeContext } from '../context/ThemeProvider'
import { moon, sunny } from 'ionicons/icons'

interface LayoutProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Layout({ id, title, children }: LayoutProps) {
  const { themeToggle, toggleChange } = useContext(ThemeContext)

  return (
    <IonPage id={id}>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >
            {title}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {children}
        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
          <IonFabButton onClick={toggleChange} title='Toggle Theme'>
            <IonIcon icon={themeToggle ? sunny : moon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}
