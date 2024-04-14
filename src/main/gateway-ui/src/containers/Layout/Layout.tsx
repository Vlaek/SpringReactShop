import { FC, ReactNode } from 'react'
import { block } from 'bem-cn'

import './Layout.less'

type LayoutProps = {
  header: ReactNode
  aside?: ReactNode
  main: ReactNode
  footer: ReactNode
}

const b = block('layout')

const Layout: FC<LayoutProps> = (props) => {
  const { header, aside, main, footer } = props
  //   const wrapperClass = b('wrapper', { wide: !aside })

  return (
    <div className={b.has({ aside: Boolean(aside) })}>
      <header>{header}</header>
      <aside>{aside}</aside>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout
