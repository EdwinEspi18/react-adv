import { useContext } from 'react'
import styles from '../styles/styles.module.css'
import { productContext } from './ProductCard'

export const ProductTitle = ({ title }: { title?: string }) => {
  const { prod } = useContext(productContext)

  return (
    <span className={styles.productDescription}>{title || prod.title}</span>
  )
}
