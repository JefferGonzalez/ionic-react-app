import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

import Routes from "./routes";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {Routes.map((route) => (
              <Route key={route.id} path={route.path} exact={route.exact}>
                {route.component}
              </Route>
            ))}
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="login" href="/">
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="products" href="/products">
              <IonIcon aria-hidden="true" icon={ellipse} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>
            <IonTabButton tab="invoices" href="/invoices">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Invoices</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </>
);

export default App;
