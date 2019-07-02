import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import isEmpty from "../../validation/is_empty";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    if (!isEmpty(userData.email) && !isEmpty(userData.password)) {
      this.props.loginUser(userData);
    }
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="container mobileContainer" style={{ marginTop: "8vh" }}>
        <div className="col-md-6 m-auto">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <div className="form-group">
              <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="inputEmail" className="sr-only">
                Your Email
              </label>
              <TextFieldGroup
                placeholder="Enter your Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
              <label htmlFor="inputPassword" className="sr-only">
                Your Password
              </label>
              <TextFieldGroup
                placeholder="Enter your Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <button className="btn btn-info btn-block mt-4" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
