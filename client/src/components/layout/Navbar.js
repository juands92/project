import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import Cookies from "../common/Cookies";
import Aux from "../common/auxComponent";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }

  render() {
    const { isAuthenticated, user, acceptCookies } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li
          className="nav-item mobileLastNewsLink"
          style={{ fontSize: "25px", marginTop: "25px" }}
        >
          <Link className="nav-link" to="/feed">
            Last News
          </Link>
          <div className="mobile-menu" />
        </li>
        <li
          className="nav-item logoutLink mobileLogoutLink"
          style={{ fontSize: "25px", marginLeft: "5px", cursor: "pointer" }}
        >
          <p
            style={{ padding: "5px", marginTop: "-3px" }}
            onClick={this.onLogoutClick.bind(this)}
            className="p20"
          >
            Logout
          </p>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard">
            <img
              className="rounded-circle"
              style={{ width: "80px", marginLeft: "10px" }}
              src={user.avatar}
              alt={user.name}
              title="You must have a gravatar connected to your email to display an image"
            />
          </Link>
        </li>
      </ul>
    );

    const gestLinks = (
      <ul className="navbar-nav ml-auto">
        <li
          className="nav-item"
          style={{ fontSize: "25px", marginRight: "10px" }}
        >
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
          <div className="mobile-menu" />
        </li>

        <li className="nav-item loginLink" style={{ fontSize: "25px" }}>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    let showCookies = null;
    if (acceptCookies) {
      showCookies = <Cookies history={this.props.history} />;
    }

    return (
      <Aux>
        <nav
          className="navbar navbar-light navbar-expand-sm"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <Link className="navbar-brand" to="/">
            <img src={require("../../img/logo.png")} style={{ width: "60%" }} />
          </Link>
          <div className="container mobileContainer">
            <button
              className="navbar-toggler navbarCollapsed"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse text-center"
              id="mobile-nav"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{ fontSize: "25px" }}>
                  <Link className="nav-link" to="/profiles">
                    <i className="fas fa-users fa-3x mr-2" aria-hidden="true" />
                  </Link>
                  <div className="mobile-menu" />
                </li>
              </ul>
              {isAuthenticated ? authLinks : gestLinks}
            </div>
          </div>
        </nav>
        {showCookies}
      </Aux>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
