export const setWeather = (data) => {
  return {
    type: "SET_WEATHER",
    payload: data,
  };
};

export const setLocation = (lat, lon) => {
  return {
    type: "SET_LOCATION",
    payload: {
      lat,
      lon,
    },
  };
};
