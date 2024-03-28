import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './Action';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch('http://localhost:8000/Detail');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const postData = (data) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await fetch('http://localhost:8000/patient', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            dispatch(fetchDataSuccess(jsonData));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};