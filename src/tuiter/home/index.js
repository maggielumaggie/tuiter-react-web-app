import React from "react";
import "../tweet-list/index.css";
import TweetList from "../tweet-list";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faShare
} from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
  return (
      <>
      <TweetList/>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col-2">
                <img width={70} className="float-end rounded-3" src={`/images/javalogo.jpg`}/>
              </div>

              <p className="col-10">
                <span className="fw-bolder">Java</span>
                <span className="wd-username"> @JAVA . 15h</span>
                <div> NASA is fabulous! Look at The Invisible World of Gravitational Waves!</div>


                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-1">

                          <img className="fw-bolder" width={25} className="float-end rounded-3" src={`/images/nasa.jpg`}/>

                        </div>

                        <div className="col-11">
                          <span className="fw-bolder">Nasa</span>

                          <span className="wd-username"> @NASA . 15h</span>


                        </div>

                        <div> Our universe is a wild and wonderful place. Join NASA astronauts, scientists and engineers on a new adventure each episode — all you need is your curiosity.  Explore the lifesaving systems of space suits, break through the sound barrier, and search for life among the stars. First-time space explorers welcome.</div>


                      </div>
                    </li>
                  </ul>
                <div className="row wd-username">
                  <div className="col-3 ">
                    <FontAwesomeIcon icon={faComment}/> 999
                  </div>

                  <div className="col-3">
                    <FontAwesomeIcon icon={faRetweet}/> 9999
                  </div>

                  <div className="col-3">
                    <FontAwesomeIcon icon={faHeart}/> 99.9k
                  </div>

                  <div className="col-3">
                    <FontAwesomeIcon icon={faShare}/>
                  </div>
                </div>

              </p>

            </div>
          </li>
        </ul>
      </>
  );
}

export default HomeComponent;