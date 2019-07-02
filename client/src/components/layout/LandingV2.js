import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import CookieBanner from "react-cookie-banner";
import Cookies from "../common/Cookies";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { cookies } = this.props;
    cookies.set("name", "Yemita", { path: "/" });
    console.log(cookies);
    return (
      <div>
        {/*<CookieBanner
          message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
        />*/}
        <div className="landing">
          <div className="landing-inner text-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">
                    Developer’s Social Network{" "}
                  </h1>
                  <p className="lead">
                    Create a developer profile, share posts and get help from
                    other developers
                  </p>
                  <hr />
                  <div className="divLanding">
                    <h1 className="h1Landing" style={{ fontSize: "95px" }}>
                      &#x0276E; <span className="blinkLanding">_ </span>/
                      &#x0276F;
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  state: state,
  auth: state.auth,
  cookies: ownProps.cookies
});

export default connect(mapStateToProps)(Landing);
