import React from "react";
import tweetArray from './tweet.json';
import TweetListItem
  from "./tweet-list-item";

const TweetList = () => {
  return(
      <ul className="list-group">
        {
          tweetArray.map(tweet =>
              <TweetListItem
                  key={tweet._id}
                  tweet={tweet}/>
          )
        }
      </ul>
  );
};

export default TweetList;