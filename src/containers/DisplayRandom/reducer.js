import * as actionTypes from "./actionTypes";
const initialState = {
  randomDetails: {},
  isLoading: false,
  errorMessage: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RANDOM_DETAILS_INIT: {
      return {
        ...state,
        isLoading: true
      };
    }

    case actionTypes.FETCH_RANDOM_DETAILS_SUCCESS: {
      return {
        ...state,
        randomDetails: action.payload,
        isLoading: false
      };
    }
    case actionTypes.FETCH_RANDOM_DETAILS_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
