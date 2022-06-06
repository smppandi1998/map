const initialState = {
    loading: false,
    data:[]
}

const MapConnectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONNECTION_REQUEST":
            return {
                ...initialState,
                loading: true,
            };
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                
            };
        case "CONNECTION_FAILED":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload,
            };
        
        default:
            return state;
    }
};

export default MapConnectReducer;
  