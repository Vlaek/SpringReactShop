import { FC, useState } from 'react'
import { FaShopify } from 'react-icons/fa6'
import { block } from 'bem-cn'

import './Header.less'

const b = block('header')

const Header: FC = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

  const handleAuthorize = () => {
    setIsAuthorized(!isAuthorized)
  }

  return (
    <div className={b()}>
      <div className={b('logo')}>
        <FaShopify className={b('icon')} />
        <div className={b('title')}>Header</div>
      </div>
      <div className={b('menu')} onClick={handleAuthorize}>
        {isAuthorized ? 'Выйти' : 'Войти'}
      </div>
    </div>
  )
}

export default Header
