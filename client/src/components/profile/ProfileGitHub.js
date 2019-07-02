import React, { Component } from "react";

class ProfileGitHub extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${this.props.username}/repos?per_page=250`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const listOfRepos = repos.map(repo => (
      <div className="col-sm-6 mb-2" key={repo.id}>
        <div className="card" style={{ height: "150px" }}>
          <div className="card-body">
            <h5 className="card-title text-info">{repo.name}</h5>
            <p className="card-text">{repo.description}</p>
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-danger mr-1">
              Issues: {repo.open_issues_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <hr />
        <h3 className="mb-4">Github Repositories</h3>
        <div className="row">{listOfRepos}</div>
      </div>
    );
  }
}

export default ProfileGitHub;
