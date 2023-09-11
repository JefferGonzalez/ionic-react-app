import Layout from '../Layout'
import './main.css'

interface Sales {
  id: number
  name: string
  price: number
  quantity: number
  total: number
}

const SalesList: Sales[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    quantity: 1,
    total: 100
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    quantity: 2,
    total: 400
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    quantity: 3,
    total: 900
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    quantity: 4,
    total: 1600
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    quantity: 5,
    total: 2500
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    quantity: 6,
    total: 3600
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
    quantity: 7,
    total: 4900
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
    quantity: 8,
    total: 6400
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
    quantity: 9,
    total: 8100
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
    quantity: 10,
    total: 10000
  }
]

const Sales: React.FC = () => {
  return (
    <Layout id='sales-page' title='Sales'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Total</th>
          </tr>
        </thead>
        <tbody>
          {SalesList.map((sales) => (
            <tr key={sales.id}>
              <th scope='row'>{sales.id}</th>
              <td>{sales.name}</td>
              <td>{sales.price}</td>
              <td>{sales.quantity}</td>
              <td>{sales.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Sales
