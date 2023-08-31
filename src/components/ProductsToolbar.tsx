import { IonButton, IonSearchbar, IonToolbar } from '@ionic/react'

interface ProductsToolbarProps {
  setIsOpen: (isOpen: boolean) => void
}

export default function ProductsToolbar({ setIsOpen }: ProductsToolbarProps) {
  return (
    <>
      <IonSearchbar
        placeholder='Search...'
        animated={true}
        style={{
          width: '80%',
          margin: 'auto'
        }}
      />
      <IonButton
        style={{
          width: '50%',
          margin: 'auto',
          display: 'block'
        }}
        onClick={() => setIsOpen(true)}
      >
        Add Product
      </IonButton>
    </>
  )
}
