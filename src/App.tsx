import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { archive, cart, home } from 'ionicons/icons'
import { Route } from 'react-router-dom'

import Routes from './routes'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {Routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              render={() => route.component}
            />
          ))}
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='login' href='/login'>
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='products' href='/products'>
            <IonIcon icon={cart} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab='sales' href='/sales'>
            <IonIcon icon={archive} />
            <IonLabel>Sales</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
