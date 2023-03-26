import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faRetweet,
  faShare
} from "@fortawesome/free-solid-svg-icons";
const TweetListItem = (
    {
      tweet = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "@SpaceX . 23h",
        "profile": "tesla.jpg",
        "title": "Space Tourist Dennis Tito Plans to Take Wife on Trip Around the Moon Aboard Elon Musk's Starship",
        "image": "tour.jpg",
        "comment": "534",
        "retweet": "1233",
        "love": "11.2k",
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${tweet.profile}`}/>
          </div>

          <p className="col-10">
            <span className="fw-bolder">{tweet.topic}</span>
            <span className="wd-username"> @{tweet.userName} . {tweet.time}</span>
            <div>{tweet.title}</div>
            <img width={500} className="float-end rounded-3" src={`/images/${tweet.image}`}/>

            <div className="row wd-username">
              <div className="col-3 ">
                <FontAwesomeIcon icon={faComment}/> {tweet.comment}
              </div>

              <div className="col-3">
                <FontAwesomeIcon icon={faRetweet}/> {tweet.retweet}
              </div>

              <div className="col-3">
                <FontAwesomeIcon icon={faHeart}/> {tweet.love}
              </div>

              <div className="col-3">
                <FontAwesomeIcon icon={faShare}/>
              </div>
            </div>

            <div className="wd-showthread">Show this thread</div>
          </p>

        </div>
      </li>
  );
};
export default TweetListItem;