import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { updateProfile } from "./profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(updateProfile(profile));
    navigate("/tuiter/profile");
  };

  return (
      <div className="profile-header">
        <div className="d-flex flex-row justify-content-between w-100">
          <div className="d-flex flex-row">
            <a href="/tuiter/profile" className="profile-header-link mt-2 mb-2">
              <TiDeleteOutline />
            </a>
            <div className="mt-2 mb-2 fw-bold fs-5 profile-header-title">
              Edit profile
            </div>
          </div>
          <button
              className="mt-2 mb-2 rounded-5 btn btn-dark profile-save-button"
              onClick={handleSave}
          >
            Save
          </button>
        </div>

        <div className="profile-image">
          <img src="/images/banner.jpg" alt="banner" className="w-100" />
        </div>

        <div className="d-flex flex-row">
          <div className="profile-image">
            <img
                src="/images/tuiter.jpg"
                alt="profile"
                className="rounded-circle w-25 border border-light border-3 z-1 position-absolute"
            />
          </div>
        </div>

        <div className="ms-4 me-4" style={{ marginTop: 150 }}>
          {Object.entries(profile).map(([key, value]) => (
              <form className="form-floating mb-2" key={key}>
                <input
                    type="text"
                    className="form-control"
                    id={key}
                    value={value}
                    name={key}
                    onChange={handleChange}
                />
                <label htmlFor={key}>{key}</label>
              </form>
          ))}
        </div>
      </div>
  );
};

export default EditProfile;
