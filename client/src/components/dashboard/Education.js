import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";
import { Link } from "react-router-dom";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(exp => (
      <tr key={exp._id}>
        <td>{exp.school}</td>
        <td>{exp.degree}</td>
        <td>{exp.fieldofstudy}</td>
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
          <h4 className="ml-3 mr-2">Education Credentials</h4>
          <Link to="/add-education" className="btn btn-light mb-3">
            <i className="fas fa-plus text-info" />
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Company</th>
              <th style={{ width: "25%" }}>Title</th>
              <th style={{ width: "25%" }}>Field</th>
              <th style={{ width: "25%" }}>Years</th>
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
