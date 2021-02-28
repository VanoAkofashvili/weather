import React from 'react';

import { useSelector } from 'react-redux';

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
      <p>{weather.name}</p>
      <div>
        <p>{Math.round(toCelcius(weather.main.temp))} ℃</p>
        <p>{`${date.getDate()} ${
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
        />
        <p>{weather.weather[0].main}</p>
      </div>
    </section>
  );
}

export default ShortWeather;
