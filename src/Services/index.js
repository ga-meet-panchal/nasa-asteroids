import axios from "axios";

export const getDetailsById = id => {
  return axios.get(
    `${process.env.REACT_APP_FETCH_ASTEROID_DETAILS}${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );
};

export const getAllAsteroids = () => {
  return axios.get(
    `${process.env.REACT_APP_FETCH_RANDOM_DETAILS}${process.env.REACT_APP_API_KEY}`
  );
};
