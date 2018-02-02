import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import gql from "graphql-tag";

const client = new ApolloClient({
  link: new HttpLink({ uri: "//localhost:8080/graphql" }),
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      {
        customer(id: "1") {
          id
          name
        }
      }
    `
  })
  .then(console.log)
  .catch(err => console.log(err));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
