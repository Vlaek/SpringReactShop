import { FC } from 'react'
import { block } from 'bem-cn'

import './App.less'

const b = block('app')

const App: FC = () => {
  return (
    <div className={b()}>
      <div className={b('text')}>App</div>
    </div>
  )
}

export default App
