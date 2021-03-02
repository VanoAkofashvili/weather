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

export const setCity = city => {
  console.log(city);
  return {
    type: 'SET_CITY',
    payload: city,
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

export const setLoading = isLoading => {
  return {
    type: 'SET_LOADING',
    payload: isLoading,
  };
};

export const openSearch = () => {
  return {
    type: 'OPEN_SEARCH',
  };
};

export const closeSearch = () => {
  return {
    type: 'CLOSE_SEARCH',
  };
};
