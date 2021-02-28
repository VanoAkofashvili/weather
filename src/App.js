import React, { useEffect } from 'react';
import axios from './axios/axios';

import { setWeather, setLocation } from './actions';

import { useDispatch, useSelector } from 'react-redux';

// backgrounds
import Clear from './assets/images/weather/Clear.png';
import Clouds from './assets/images/weather/Clouds.png';
import Rain from './assets/images/weather/Rain.jpg';
import Snow from './assets/images/weather/Snow.jpg';

import ShortWeather from './components/ShortWeather/ShortWeather';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(bigState => bigState.location);
  const weather = useSelector(bigState => bigState.weather);

  useEffect(() => {
    // check if geolocation is available
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          dispatch(
            setLocation(position.coords.latitude, position.coords.longitude)
          );
          // console.log(position);
        },
        function (error) {
          console.error('Error Code = ' + error.code + ' - ' + error.message);
        }
      );
    } else {
      console.log('Geolocation is not available');
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(data => {
        console.log(data.data);
        dispatch(setWeather(data.data));
      });
  }, [location]);

  if (!weather) {
    return 'TEXT';
  }

  let bg;
  switch (weather.weather[0].main) {
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      bg = Rain;
      break;
    case 'Clouds':
      bg = Clouds;
      break;
    case 'Clear':
      bg = Clear;
      break;
    case 'Snow':
      bg = Snow;
      break;
  }

  const headerStyles = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.15)), url("${bg}") no-repeat center center/cover`,
    height: '100vh',
  };

  return (
    <div className="App">
      <header style={headerStyles}>
        <ShortWeather />
      </header>
    </div>
  );
}

export default App;
