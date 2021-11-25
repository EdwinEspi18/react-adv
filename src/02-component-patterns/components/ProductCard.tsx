import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'
import { createContext } from 'react'
import { ProductContext, Props } from '../interfaces/Product'

export const productContext = createContext({} as ProductContext)
const { Provider } = productContext

export const ProductCard = ({ prod, children }: Props) => {
  const pd = useProducts()
  return (
    <Provider value={{ pd, prod }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}

export default ProductCard
