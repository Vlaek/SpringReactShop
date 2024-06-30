import { FC, useEffect } from 'react'
import { block } from 'bem-cn'
import { useGetProductsQuery } from '../../store/api/api'
import Product from '../Product/view/Product'

import './App.less'

const b = block('app')

const App: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  useEffect(() => {
    if (error) {
      console.error('Ошибка загрузки данных:', error)
    }
  }, [error])

  if (isLoading) {
    return <div className={b('loader')}>Загрузка...</div>
  }

  return (
    <div className={b()}>
      <h1 className={b('title')}>Список продуктов</h1>
      <ul className={b('list')}>
        {data && data.map((product) => <Product product={product} key={product.id} />)}
      </ul>
    </div>
  )
}

export default App
