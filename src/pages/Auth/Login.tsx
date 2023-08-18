import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./main.css";

export default function Login() {
  const [username, setUsername] = useState<string | number | null>()
  const [password, setPassword] = useState<string | number | null>();

  const handleLogin = () => {
    if (username && password) {
      alert(`Username: ${username} Password: ${password}`);
    }
  };
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ionic with React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle
              style={{
                textAlign: "center",
              }}
            >
              Welcome
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonInput
              label="Username"
              name="username"
              placeholder="Enter your username"
              type="text"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              clearInput={true}
            />
            <IonInput
              label="Password"
              name="password"
              placeholder="Enter your username"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              clearInput={true}
            />
            <IonButton
              expand="block"
              style={{
                margin: "1rem",
              }}
              onClick={handleLogin}
            >
              Login
            </IonButton>

            <IonCardSubtitle
              style={{
                textAlign: "center",
              }}
            >
              <a href="/">Forgot Password?</a>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
