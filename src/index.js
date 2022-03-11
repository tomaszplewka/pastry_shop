import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";
import reducers from "./reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
