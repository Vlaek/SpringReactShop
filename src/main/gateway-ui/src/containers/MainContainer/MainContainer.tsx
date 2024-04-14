import { FC, ReactNode } from 'react'
import { block } from 'bem-cn'

import './MainContainer.less'

type MainContainerProps = {
  children: ReactNode
}

const b = block('main-container')

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className={b()}>{children}</div>
}

export default MainContainer
