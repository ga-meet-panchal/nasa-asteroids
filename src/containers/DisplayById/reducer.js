import * as actionTypes from "./actionTypes";

const initialState = {
  asteroidDetails: {},
  isLoading: false,
  erroMessage: "",
  fetchedFailed: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAILS_BY_ID_INIT: {
      return {
        ...state,
        isLoading: true,
        fetchedFailed: false,
        erroMessage: ""
      };
    }

    case actionTypes.FETCH_DETAILS_BY_ID_SUCCESS: {
      return {
        ...state,
        asteroidDetails: action.payload,
        isLoading: false
      };
    }

    case actionTypes.FETCH_DETAILS_BY_ID_FAILURE: {
      return {
        ...state,
        erroMessage: action.payload,
        isLoading: false,
        fetchedFailed: true
      };
    }

    default:
      return state;
  }
};

export default reducer;
