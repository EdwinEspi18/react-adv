import { useContext } from 'react'
import { productContext } from '../components/ProductCard'
import noIMage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img }: { img?: string }) => {
  const { prod } = useContext(productContext)
  let imgToShow: string
  if (img) {
    imgToShow = img
  } else if (prod.img) {
    imgToShow = prod.img
  } else {
    imgToShow = noIMage
  }
  return <img className={styles.productImg} src={imgToShow} alt="Coffe Mug" />
}
