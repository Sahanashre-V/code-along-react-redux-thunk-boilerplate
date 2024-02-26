
import axios from "axios";

const DataFetch = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "FETCH_DATA_FAILURE", error });
    }
};

export default DataFetch;
