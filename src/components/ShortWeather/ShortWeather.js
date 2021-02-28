import React from 'react';

import { useSelector } from 'react-redux';

// styling
import './ShortWeather.css';

const toCelcius = kelvin => {
  return kelvin - 273.15;
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function ShortWeather() {
  const weather = useSelector(bigState => bigState.weather);

  const date = new Date();

  return (
    <section className="short-weather">
      <p className="short-temp">{Math.round(toCelcius(weather.main.temp))}℃</p>

      <div>
        <p className="short-name">{weather.name}</p>
        <p className="short-date">{`${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`}</p>
      </div>
      <div>
        <img
          src={
            require(`../../assets/images/icons/weather/${weather.weather[0].icon}.png`)
              .default
          }
          alt="icon"
          className="short-icon"
        />
        <p className="short-main">{weather.weather[0].main}</p>
      </div>
    </section>
  );
}

export default ShortWeather;
