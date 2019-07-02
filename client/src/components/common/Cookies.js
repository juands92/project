import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUserCookies } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Cookies extends Component {
  onAcceptCookies() {
    this.props.setUserCookies(this.props.auth.loginBasic);
  }

  render() {
    console.log(this.props);
    return (
      <div className="cookie" style={{ textAlign: "center", zIndex: "10000" }}>
        <p className="cookie__message">
          We use cookies, just to track visits to our website, we store no
          personal details.
        </p>
        <button
          className="cookie__accept"
          onClick={() => this.onAcceptCookies()}
        >
          Accept cookies
        </button>
        <Link to="/" className="cookie__decline">
          Decline
        </Link>
        <a
          className="cookie__link"
          href="http://www.allaboutcookies.org/"
          title="Learn all about cookies and why sites use them"
          target="_blank"
        >
          What are cookies?
        </a>
      </div>
    );
  }
}

Cookies.propTypes = {
  setUserCookies: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { setUserCookies }
)(Cookies);
