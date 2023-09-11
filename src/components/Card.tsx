import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react'

interface Card {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: Card) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle
          style={{
            textAlign: 'center'
          }}
        >
          {title}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{children}</IonCardContent>
    </IonCard>
  )
}
