import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import fetchSongsQuery from "../queries/fetchSongs";

const deleteSongQuery = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const SongList = () => {
  const fetchSongs = useQuery(fetchSongsQuery);
  const deleteSong = useMutation(deleteSongQuery);

  if (fetchSongs.loading || deleteSong.loading) {
    return <p>Loading...</p>;
  }
  if (fetchSongs.error || deleteSong.error) {
    return <p>Error :(</p>;
  }

  const deleteSongHandler = (songId) => {
    deleteSong[0]({
      variables: { id: songId },
      refetchQueries: [{ query: fetchSongsQuery }]
    });
  };

  const renderSongs = fetchSongs.data.songs.map(({ id, title }) => {
    return (
      <li key={id} className="collection-item">
        <p>{title}</p>
        <i className="material-icons" onClick={() => deleteSongHandler(id)}>
          delete
        </i>
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
