import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick() {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if Logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div className="row">
              <p className="lead mr-1 ml-3 welcome">Welcome</p>
              <Link
                className="lead text-info mr-3 welcome"
                to={`/profile/${profile.handle}`}
              >
                {user.name}
              </Link>
              <Link to="/edit-profile" className="btn btn-light mb-4 mt-4">
                <i className="fas fa-pen text-info" />
              </Link>
            </div>

            {/*<ProfileActions />*/}
            <Experience experience={profile.experience} />
            <div className="mb-4" />
            <div className="mt-4" />
            <Education education={profile.education} />
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
              style={{ float: "right" }}
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but hast no profile
        dashboardContent = (
          <div className="noProfileWelcome">
            <p className="lead text-muted welcome">Welcome {user.name}</p>
            <div className="row">
              <p
                className="ml-3 mobiled-none"
                style={{ fontSize: "20px", marginRight: "50vh" }}
              >
                You have not yet setup a profile, please add some info
              </p>
              <Link
                to="/create-profile"
                className="btn btn-lg btn-info"
                style={{
                  margin: "0 auto"
                }}
              >
                Create Profile
              </Link>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container mobileNoProfileDashboard">
          <div className="row">
            <div className="col-md-12 mt-5">{dashboardContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
