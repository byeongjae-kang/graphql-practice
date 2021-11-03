import React from "react";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const renderSongs = data.songs.map((song) => {
    return (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    );
  });

  return <ul className="collection">{renderSongs}</ul>;
};

export default SongList;
