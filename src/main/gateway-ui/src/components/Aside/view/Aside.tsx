import { FC } from 'react'
import { FaFilter } from 'react-icons/fa'
import { block } from 'bem-cn'

import './Aside.less'

const b = block('aside')

const Aside: FC = () => {
  return (
    <div className={b()}>
      <div className={b('header')}>
        <FaFilter className={b('icon')} />
        <div className={b('title')}>Filter</div>
      </div>
      <div className={b('menu')}>Filter Menu</div>
    </div>
  )
}

export default Aside
