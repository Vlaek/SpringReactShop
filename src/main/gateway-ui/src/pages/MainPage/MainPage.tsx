import { FC } from "react";
import App from "@/components/App/App";
import Layout from "@/containers/Layout/Layout";
import { Aside, Footer, Header } from "@/shared/components";

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
