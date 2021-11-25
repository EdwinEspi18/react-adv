import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductButtons } from './ProductButtons'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductCardHOCO } from '../interfaces/Product'

export { ProductButtons } from './ProductButtons'
export { ProductTitle } from './ProductTitle'
export { ProductImage } from './ProductImage'

export const ProductCard: ProductCardHOCO = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})
