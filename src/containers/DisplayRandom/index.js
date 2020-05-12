import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomAsteroid } from "./action";
import "./style.css";

class DisplayRandom extends Component {
  componentDidMount() {
    this.props.fetchRandomAsteroid();
  }

  render() {
    if (this.props.isLoading) {
      return <p>Fetching Random Asteroid</p>;
    }
    const {
      name,
      nasa_jpl_url,
      is_potentially_hazardous_asteroid
    } = this.props.randomDetails;
    return (
      <div className="center ">
        <p>
          <span className="bold">Name : </span>
          {name}
        </p>
        <p>
          <span className="bold">URL : </span>
          {nasa_jpl_url}
        </p>
        <p>
          <span className="bold">Potentially Hazardous :</span>{" "}
          {`${is_potentially_hazardous_asteroid}`}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.displayRandom };
};

const mapDispatchToProps = {
  fetchRandomAsteroid
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRandom);
