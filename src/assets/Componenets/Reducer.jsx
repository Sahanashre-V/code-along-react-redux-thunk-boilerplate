
const initialState = {
    items: [],
    loading: false,
    error: null
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default Reducer;
