import React from "react";

const TuitStats = ({ stats }) => (
    <div className="row">
      <ul className="nav nav-fill mt-2 text-secondary">
        <li className="nav-item">
          <i className="bi bi-chat-left-dots"></i> {stats.replies}
        </li>
        <li className="nav-item">
          <i className="bi bi-repeat"></i> {stats.retuits}
        </li>
        <li className="nav-item">
          <i style={{ color: stats.liked ? 'red' : undefined }} className={stats.liked ? 'bi bi-heart-fill' : 'bi bi-heart'}></i> {stats.likes}
        </li>
        <li className="nav-item">
          <i className="bi bi-share"></i>
        </li>
      </ul>
    </div>
);
export default TuitStats;
