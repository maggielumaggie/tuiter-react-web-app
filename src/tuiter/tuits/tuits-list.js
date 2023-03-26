import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import React from "react";

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits);
  return (
      <ul className="list-group">
        {tuits.map(tuit => (
            <div>
              <TuitItem tuit={tuit} key={tuit._id} />
            </div>
        ))}
      </ul>
  );
};

export default TuitsList;