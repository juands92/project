import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Social Account</p>
              <form className="form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="name" className="cols-sm-2 control-label">
                    Your Name
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span
                        className="input-group-addon"
                        style={{ paddingTop: "1vh" }}
                      >
                        <i
                          className="fa fa-user fa-lg mr-2"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name
                        })}
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <span className="invalid-feedback">{errors.name}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="email" className="cols-sm-2 control-label">
                    Your Email
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span
                        className="input-group-addon"
                        style={{ paddingTop: "1vh" }}
                      >
                        <i
                          className="fa fa-envelope fa-lg mr-2"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.email
                        })}
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <span className="invalid-feedback">{errors.email}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="password" className="cols-sm-2 control-label">
                    New Password
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span
                        className="input-group-addon"
                        style={{ paddingTop: "1vh" }}
                      >
                        <i
                          className="fa fa-lock fa-lg mr-2"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="password"
                        className={classnames("form-control", {
                          "is-invalid": errors.password
                        })}
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <span className="invalid-feedback">
                          {errors.password}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="confirm" className="cols-sm-2 control-label">
                    Confirm Password
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span
                        className="input-group-addon"
                        style={{ paddingTop: "1vh" }}
                      >
                        <i
                          className="fa fa-lock fa-lg mr-2"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="password"
                        className={classnames("form-control", {
                          "is-invalid": errors.password2
                        })}
                        name="password2"
                        id="password2"
                        placeholder="Confirm your Password"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <span className="invalid-feedback">
                          {errors.password2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group ">
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
