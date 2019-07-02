import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle fa-lg text-info mr-2">
          <span style={{ marginLeft: "5px" }}>Edit Profile</span>
        </i>
      </Link>
      {/*<Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie fa-lg text-info mr-2">
          <span style={{ marginLeft: "5px", fontWeight: "900" }}>
            Add Experience
          </span>
        </i>
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap fa-lg text-info mr-2">
          <span style={{ marginLeft: "5px" }}>Add Education</span>
        </i>
  </Link>*/}
    </div>
  );
};

export default ProfileActions;
