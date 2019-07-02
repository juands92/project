import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    );
  }
}

export default Spinner;
