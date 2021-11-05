import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Layout from "./layout/Layout";
import Container from "./components/Container";
import SongList from "./components/SongList";
import NewSong from "./components/NewSong";
import SongDetail from "./components/SongDetail";

import "./style/style.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Container />}>
              <Route index element={<Navigate to="songs" />} />
              <Route path="songs" element={<SongList />} />
              <Route path="songs/new" element={<NewSong />} />
              <Route path="songs/:id" element={<SongDetail />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
