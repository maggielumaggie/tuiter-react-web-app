import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const { firstName, lastName, handle, bio, location, dateOfBirth, dateJoined, followingCount, followersCount, website } = useSelector((state) => state.profile);

  return (
      <div>
        <div className="d-flex flex-row">
          <div className="ms-2 fs-4 align-self-center">
            <BiLeftArrowAlt />
          </div>
          <div className="ms-5">
            <div className="fs-5 fw-bold">Maggie Lu</div>
            <div className="fs-6 text-muted">9.999 Tweets</div>
          </div>
        </div>
        <img src="/images/banner.jpg" alt="banner" className="w-100" />

        <div className="d-flex flex-row">
          <div style={{ marginTop: -60, marginLeft: 20, width: '80%' }}>
            <img src="/images/tuiter.jpg" alt="profile" className="rounded-circle w-25 border border-light border-3 z-1 position-absolute" />
          </div>

          <div style={{ width: 130, right: 0 }}>
            <Link to="/tuiter/edit-profile" className="btn btn-outline-secondary rounded-pill float-end mt-2">
              <span className="text-dark fw-bold">Edit profile</span>
            </Link>
          </div>
        </div>

        <div className="ms-3 me-3" style={{ marginTop: 80 }}>
          <div className="fs-4 fw-bold">
            {firstName} {lastName}
          </div>
          <div className="fs-6 text-muted">
            {handle}
          </div>
          <div className="mt-2">
            {bio}
          </div>
          <div className="mt-2 text-muted">
            <HiOutlineLocationMarker /> {location} <span className="ms-3" />
            <FaBirthdayCake /> {dateOfBirth} <span className="ms-3" />
            <BsCalendar3 /> {dateJoined}
          </div>
          <div className="mt-2 ">
            <span className="fw-bold">{followingCount}</span>
            <span className="text-muted"> Following </span>
            <span className="ms-3" />
            <span className="fw-bold">{followersCount}</span>
            <span className="text-muted"> Followers </span>
          </div>
          <div className="mt-2">
            {website}
          </div>
        </div>
      </div>
  )
}

export default ProfileComponent;
