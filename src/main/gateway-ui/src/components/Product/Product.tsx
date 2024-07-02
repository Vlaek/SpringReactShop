import { FC } from 'react'
import { block } from 'bem-cn'
import { IProduct } from '../../types'

import './Product.less'

interface IProductProps {
  product: IProduct
}

const b = block('product')

const Product: FC<IProductProps> = (props) => {
  const {
    product: { id, name, amount, category },
  } = props

  const productString = `${id}. ${name} - ${amount}`

  return (
    <div className={b()} title={category.name}>
      {productString}
    </div>
  )
}

export default Product
