import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Layout from "./layout/Layout";
import Container from "./components/Container";
import SongList from "./components/SongList";
import NewSong from "./components/NewSong";

import './style/style.css'

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Container />}>
              <Route index element={<Navigate to="songs" />} />
              <Route path="songs" element={<SongList />} />
              <Route path="songs/new" element={<NewSong />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
