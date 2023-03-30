import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ stats }) => {
  const dispatch = useDispatch();

  const [likes, setLikes] = useState(stats.likes);
  const [dislikes, setDislikes] = useState(stats.dislikes);
  const [isLiked, setIsLiked] = useState(stats.liked);
  const [isDisliked, setIsDisliked] = useState(stats.disliked);

  const handleReaction = (isLike) => {
    const reactionType = isLike ? "likes" : "dislikes";
    const reactionState = isLike ? isLiked : isDisliked;
    const setReactionState = isLike ? setIsLiked : setIsDisliked;
    const updatedReactionCount = reactionState ? -1 : 1;

    if (isLike) {
      setLikes(likes + updatedReactionCount);
    } else {
      setDislikes(dislikes + updatedReactionCount);
    }

    setReactionState(!reactionState);

    dispatch(
        updateTuitThunk({
          ...stats,
          [reactionType]: likes + updatedReactionCount,
          [isLike ? "isLiked" : "isDisliked"]: !reactionState,
        })
    );
  };

  return (
      <div className="row">
        <ul className="nav nav-fill mt-2 text-secondary">
          <li className="nav-item">
            <i className="bi bi-chat-left-dots"></i> {stats.comments}
          </li>
          <li className="nav-item">
            <i className="bi bi-repeat"></i> {stats.retuits}
          </li>
          <li className="nav-item">
          <span style={{ marginRight: "5px" }}>
            {" "}
            <i
                className={`bi bi-hand-thumbs-up-fill ${isLiked ? "text-danger" : ""}`}
                onClick={() => handleReaction(true)}
            ></i>
          </span>
            {likes}
          </li>
          <li className="nav-item">
          <span style={{ marginRight: "5px" }}>
            {" "}
            <i
                className={`bi bi-hand-thumbs-down-fill ${isDisliked ? "text-danger" : ""}`}
                onClick={() => handleReaction(false)}
            ></i>
          </span>
            {dislikes}
          </li>
          <li className="nav-item">
            <i className="bi bi-share"></i>
          </li>
        </ul>
      </div>
  );
};

export default TuitStats;
