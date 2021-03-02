import React, { useEffect } from 'react';
import axios from './axios/axios';

import { setWeather, setLocation, setLoading } from './actions';

import { useDispatch, useSelector } from 'react-redux';

// backgrounds
import Clear from './assets/images/weather/Clear.png';
import Clouds from './assets/images/weather/Clouds.png';
import Clouds2 from './assets/images/weather/Clouds2.jpeg';
import Rain from './assets/images/weather/Rain.jpg';
import Snow from './assets/images/weather/Snow.jpg';

// Components
import ShortWeather from './components/ShortWeather/ShortWeather';
import Cities from './components/Cities/Cities';
import { Spinner } from './components/Spinner/Spinner';
import Search from './components/Search/Search';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(bigState => bigState.location);
  const weather = useSelector(bigState => bigState.weather);
  const isLoading = useSelector(state => state.isLoading);
  const city = useSelector(state => state.city);

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
    dispatch(setLoading(true));
    let url;
    if (city) {
      url = `weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    } else if (location) {
      url = `weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`;
    }
    axios
      .get(url)
      .then(data => {
        console.log(data.data);
        dispatch(setWeather(data.data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        console.log(error);
        dispatch(setLoading(false));
      });
  }, [location, city]);

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
      bg = Math.random() < 0.5 ? Clouds : Clouds2;
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
    position: 'relative',
  };

  return (
    <div className="App">
      <header style={headerStyles}>
        {isLoading ? <Spinner /> : null}
        <Cities />
        <Search />
        <ShortWeather />
      </header>
    </div>
  );
}

export default App;
