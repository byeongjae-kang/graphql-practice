import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import fetchSongs from "../queries/fetchSongs";

const SongList = () => {
  const { loading, error, data } = useQuery(fetchSongs);

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

  return (
    <div>
      <ul className="collection">{renderSongs}</ul>
      <Link to="new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
