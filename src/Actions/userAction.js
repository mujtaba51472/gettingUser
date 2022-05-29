
import axios from 'axios'
export const fetchUserData = () => async (dispatch) => {
    dispatch({
      type: "GET_USER_INIT",
    });
    const url ='https://jsonplaceholder.typicode.com/users';
  
    try {
      let response = await axios.get(url);
        if (response) {
          dispatch({
            type: "GET_USER_SUCCESS",
            payload: response  ||" User Fetched ",
          });
        }
      
    } catch (err) {
      const error = err.message || "Error While Getting Users";
      dispatch({
        type: "GET_USER_FAIL",
        payload: error,
      });
    }
  };
