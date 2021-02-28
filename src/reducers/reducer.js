import { combineReducers } from "redux";

const weatherReducer = (state, action) => {
  if (typeof state === "undefined") {
    return null;
  }

  if (action.type === "SET_WEATHER") {
    return action.payload;
  } else {
    return state;
  }
};

const locationReducer = (state = { lat: 41.7166, lon: 44.7833 }, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});

export default reducer;
