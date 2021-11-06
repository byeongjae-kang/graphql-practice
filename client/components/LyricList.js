import React from "react";
import { gql, useMutation } from "@apollo/client";
const likesQuery = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(likesQuery);

  const likeHandler = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    });
  };

  const lyricsList = lyrics.map(({ id, content, likes }) => {
    return (
      <li className="collection-item" key={id}>
        {content}
        <div className="vote-box">
          <i className="material-icons" onClick={() => likeHandler(id, likes)}>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    );
  });

  return (
    <div>
      <h3>LyricList</h3>
      <ul className="collection">{lyricsList}</ul>
    </div>
  );
};

export default LyricList;
