import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

import { ConfigProvider } from "antd";
import ptBr from "antd/lib/locale/pt_BR";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={ptBr}>
          <App />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
