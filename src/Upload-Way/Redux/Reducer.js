// Reducer.js

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from './Action';
  
  const initialState = {
    patientDetail: [],
    loading: false,
    error: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          patientDetail: action.payload,
        };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                patientDetail: action.payload,
            };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  