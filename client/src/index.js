import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import createNewClient from './graphql/client';
import ApolloProvider from "react-apollo/ApolloProvider";

import App from "./scenes/Home/App";
import "./styles/index.css";

ReactDOM.render(
  <ApolloProvider client={createNewClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
