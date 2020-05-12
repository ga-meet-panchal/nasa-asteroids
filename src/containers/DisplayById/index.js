import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailsById } from "./action";
import { withRouter } from "react-router-dom";
import "./style.css";

class DisplayById extends Component {
  componentDidMount() {
    this.props.fetchDetailsById(this.props.match.params.id);
  }
  render() {
    if (this.props.isLoading) {
      return <p>Fetching Details...</p>;
    }
    if (this.props.fetchedFailed) {
      return <p>Please Check Your ID</p>;
    }
    const {
      name,
      nasa_jpl_url,
      is_potentially_hazardous_asteroid
    } = this.props.asteroidDetails;

    return (
      <div className="center">
        <p>
          <span className="bold">Name : </span>
          {name}
        </p>
        <p>
          <span className="bold">URL :</span> {nasa_jpl_url}
        </p>
        <p>
          <span className="bold">Potentially Hazardous : </span>
          {`${is_potentially_hazardous_asteroid}`}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.displayById };
};
const mapDispatchToProps = {
  fetchDetailsById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DisplayById));
