import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SongList from "./components/SongList";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
