import { FC } from 'react'
import Layout from '../../containers/Layout/Layout'
import Header from '../../components/Header/view/Header'
import App from '../../components/App/view/App'
import Footer from '../../components/Footer/view/Footer'
import Aside from '../../components/Aside/view/Aside'

const MainPage: FC = () => {
  return <Layout header={<Header />} aside={<Aside />} main={<App />} footer={<Footer />} />
}

export default MainPage
