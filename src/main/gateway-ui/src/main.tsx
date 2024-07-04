import React from "react";
import ReactDOM from "react-dom/client";
import MainContainer from "./containers/MainContainer/MainContainer";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles/index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContainer>
        <MainPage />
      </MainContainer>
    </Provider>
  </React.StrictMode>
);
