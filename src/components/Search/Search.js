import React from 'react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import './Search.css';

export default () => {
  return (
    <div className="search flex fdc aife">
      <IoSearchCircleOutline className="search-btn btn" />
      <span className="search-text">ქალაქის ძიება</span>

      <input type="text" className="search-input" />
    </div>
  );
};
