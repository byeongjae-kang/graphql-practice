import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const NewSong = () => {
  const [addSong, { loading, error, data }] = useMutation(ADD_SONG);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return <p>adding the song...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    addSong({ variables: { title: title } });

    setTitle("");
    navigate("/songs");
  };

  return (
    <div>
      <h3>Create New Song</h3>
      <form onSubmit={submitHandler}>
        <label>Song Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSong;
