import { getDetailsById } from "../../Services";
import * as actionType from "./actionTypes";

export const fetchDetailsById = id => {
  return dispatch => {
    dispatch({
      type: actionType.FETCH_DETAILS_BY_ID_INIT
    });
    getDetailsById(id)
      .then(response => {
        if (response && response.status && response.status === 200) {
          dispatch({
            type: actionType.FETCH_DETAILS_BY_ID_SUCCESS,
            payload: response.data
          });
        }
      })
      .catch(error => {
        dispatch({
          type: actionType.FETCH_DETAILS_BY_ID_FAILURE,
          payload: error
        });
      });
  };
};
