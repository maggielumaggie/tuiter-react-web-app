import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector(state => state.who);
  return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <span className="fs-3">Who to follow</span>
          </div>
        </li>
        {who.map((who, index) => (
            <div key={index}>
              <WhoToFollowListItem who={who} key={index} />
            </div>
        ))}
      </ul>
  );
};

export default WhoToFollowList;