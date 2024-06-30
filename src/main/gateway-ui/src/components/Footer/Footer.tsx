import { FC } from 'react'
import { block } from 'bem-cn'

import './Footer.less'

const b = block('footer')

const Footer: FC = () => {
  return <div className={b()}>Footer</div>
}

export default Footer
