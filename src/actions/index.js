export const setWeather = data => {
  return {
    type: 'SET_WEATHER',
    payload: data,
  };
};

export const setLocation = (lat, lon) => {
  return {
    type: 'SET_LOCATION',
    payload: {
      lat,
      lon,
    },
  };
};

export const openMenu = () => {
  return {
    type: 'OPEN_MENU',
  };
};

export const closeMenu = () => {
  return {
    type: 'CLOSE_MENU',
  };
};
