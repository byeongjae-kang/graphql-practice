import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const addLyricToSongQuery = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

const LyricForm = ({ songId }) => {
  const [lyric, setLyric] = useState("");
  const [addLyricToSong, { loading, error, data }] =
    useMutation(addLyricToSongQuery);

  if (loading) {
    return <p>adding the Lyric...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    addLyricToSong({
      variables: { content: lyric, songId }
    }).then(() => {
      setLyric("");
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add a Lyric</label>
      <input value={lyric} onChange={(e) => setLyric(e.target.value)} />
    </form>
  );
};

export default LyricForm;
