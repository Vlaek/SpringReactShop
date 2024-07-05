import { FC } from "react";
import App from "@/components/App/App";
import { Aside, Footer, Header } from "@/shared/components";
import { Layout } from "@/containers";

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
