import { getAllAsteroids, getDetailsById } from "../../Services";
import * as actionTypes from "./actionTypes";

export const fetchRandomAsteroid = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_RANDOM_DETAILS_INIT
    });
    getAllAsteroids()
      .then(response => {
        if (response && response.status && response.status === 200) {
          let totalData = response.data.page.size;
          let randomNumber = Math.floor(Math.random() * totalData);
          let randomID = response.data.near_earth_objects[randomNumber].id;

          getDetailsById(randomID)
            .then(response => {
              if (response && response.status && response.status === 200) {
                dispatch({
                  type: actionTypes.FETCH_RANDOM_DETAILS_SUCCESS,
                  payload: response.data
                });
              }
            })
            .catch(error => {
              dispatch({
                type: actionTypes.FETCH_RANDOM_DETAILS_FAILURE,
                payload: error
              });
            });
        }
      })
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_RANDOM_DETAILS_FAILURE,
          payload: error
        });
      });
  };
};
