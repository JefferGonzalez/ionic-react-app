import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import ProductsToolbar from '../../components/ProductsToolbar'
import { Product, getProducts } from '../../services/Products'
import Layout from '../Layout'
import AddProduct from './add'
import './main.css'

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Layout id='products-page' title='List Products'>
      <ProductsToolbar setIsOpen={setIsOpen} />
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        <p
          style={{
            textAlign: 'center'
          }}
        >
          No products, add a new one
        </p>
      )}
      <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} />
    </Layout>
  )
}

export default Products
