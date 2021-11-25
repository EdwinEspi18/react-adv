import { ReactElement } from 'react'

export interface Product {
  id: string
  title: string
  img?: string
}
export interface Props {
  prod: Product
  children?: ReactElement | ReactElement[]
}
export interface ProductCardHOCO {
  // eslint-disable-next-line no-undef
  ({ prod, children }: Props): JSX.Element
  // eslint-disable-next-line no-undef
  Title: ({ title }: { title?: string }) => JSX.Element
  // eslint-disable-next-line no-undef
  Image: ({ img }: { img?: string }) => JSX.Element
  // eslint-disable-next-line no-undef
  Buttons: () => JSX.Element
}
export interface ProductContext {
  pd: {
    increaseBy: (n: number) => void
    counter: number
  }
  prod: Product
}
