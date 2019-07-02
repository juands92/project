import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";
import { Link } from "react-router-dom";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>{exp.location}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <div className="row">
          <h4 className="ml-3 mr-2">Experience Credentials</h4>
          <Link to="/add-experience" className="btn btn-light mb-3">
            <i className="fas fa-plus text-info" />
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Company</th>
              <th style={{ width: "25%" }}>Title</th>
              <th style={{ width: "25%" }}>Location</th>
              <th style={{ width: "25%" }}>Years</th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
