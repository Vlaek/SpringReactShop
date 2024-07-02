import { FC, useEffect } from 'react'
import { block } from 'bem-cn'
import { useGetProductsQuery, useGetUsersQuery } from '../../store/api/api'
import Product from '../Product/Product'

import './App.less'
import User from '../User/User'

const b = block('app')

const App: FC = () => {
  const {
    data: productsList,
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetProductsQuery()
  const { data: usersList, error: usersError, isLoading: usersIsLoading } = useGetUsersQuery()

  useEffect(() => {
    if (productsError || usersError) {
      console.error('Ошибка загрузки данных:', productsError)
    }
  }, [productsError])

  if (productsIsLoading || usersIsLoading) {
    return <div className={b('loader')}>Загрузка...</div>
  }

  return (
    <div className={b()}>
      <h1 className={b('title')}>Список продуктов</h1>
      <ul className={b('list')}>
        {productsList &&
          productsList.map((product) => <Product product={product} key={product.id} />)}
        {usersList && usersList.map((user) => <User user={user} key={user.id} />)}
      </ul>
    </div>
  )
}

export default App
