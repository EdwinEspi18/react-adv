import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from '../components'
import { Product } from '../interfaces/Product'
const products: Product = {
  id: '1',
  title: 'Coffee Mug',
}
const products2: Product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}
const ShoopingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard prod={products2}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard prod={products}>
          <ProductImage />
          <ProductTitle title={'Hola Mundo'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoopingPage
