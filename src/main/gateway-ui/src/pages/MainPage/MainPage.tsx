import { FC } from "react";
import Layout from "../../containers/Layout/Layout";
import Header from "../../components/Header/Header";
import App from "../../components/App/App";
import Footer from "../../components/Footer/Footer";
import Aside from "../../components/Aside/Aside";

const MainPage: FC = () => {
  return (
    <Layout
      header={<Header />}
      aside={<Aside />}
      main={<App />}
      footer={<Footer />}
    />
  );
};

export default MainPage;
