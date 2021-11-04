import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Container from "./components/Container";
import SongList from "./components/SongList";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<SongList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
