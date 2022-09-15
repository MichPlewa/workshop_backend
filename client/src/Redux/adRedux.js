const createActionName = (actionName) => `app/ads/${actionName}`;

const UPDATE_ADS = createActionName('UPDATE_ADS');

const updateAds = (payload) => ({ payload, type: UPDATE_ADS });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/ads')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateAds(data));
      });
  };
};

const adReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_ADS:
      return action.payload;
    default:
      return state;
  }
};

export default adReducer;
