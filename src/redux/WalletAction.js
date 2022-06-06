
const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

export const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

export const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};





export const connectMap = () => {
    return async(dispatch) => {
        dispatch(connectRequest());
        try {
            

            

            let data=["Muthu","pandi"]


            

            dispatch(
                connectSuccess({
                    data
                })
            );
        } catch (e) {
            dispatch(connectFailed(e));
        }
    }
}





