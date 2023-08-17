import Login from './pages/Auth/Login'
import Invoices from './pages/Invoices'
import Products from './pages/Products'

type Route = {
  id: string
  path: string
  component: JSX.Element
  exact?: boolean
}

const Routes: Route[] = [
  {
    id: 'login',
    path: '/',
    component: <Login />,
    exact: true
  },
  {
    id: 'products',
    path: '/products',
    component: <Products />,
    exact: true
  },
  {
    id: 'invoices',
    path: '/invoices',
    component: <Invoices />,
    exact: true
  }
]

export default Routes
