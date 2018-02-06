import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import config from "../config";

function createNewClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: config.api }),
    cache: new InMemoryCache()
  });
}

export default createNewClient;
