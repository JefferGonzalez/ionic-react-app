import Login from './pages/Auth/Login'
import Sales from './pages/Sales'
import Products from './pages/Products'
import ShowProduct from './pages/Products/show'

interface Route {
  id: string
  path: string
  component: JSX.Element
  exact?: boolean
}

const Routes: Route[] = [
  {
    id: 'login',
    path: '/login',
    component: <Login />,
    exact: true
  },
  {
    id: 'products',
    path: '/products',
    component: <Products />
  },
  {
    id: 'product',
    path: '/product/:id',
    component: <ShowProduct />,
    exact: true
  },
  {
    id: 'sales',
    path: '/sales',
    component: <Sales />,
    exact: true
  }
]

export default Routes
