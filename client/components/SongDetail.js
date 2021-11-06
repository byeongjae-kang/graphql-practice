import React from "react";
import { useQuery } from "@apollo/client";
import fetchSongQuery from "../queries/fetchSong";
import { useParams, Link } from "react-router-dom";
import LyricForm from "./LyricForm";
import LyricList from "./LyricList";

const SongDetail = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(fetchSongQuery, {
    variables: { id: params.id }
  });

  if (loading) {
    return <p>getting the song...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <Link to="/songs">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricForm songId={params.id} />
    </div>
  );
};

export default SongDetail;
