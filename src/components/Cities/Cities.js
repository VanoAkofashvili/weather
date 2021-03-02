import React from 'react';

import { RiMenu2Line } from 'react-icons/ri';

// components
import CitiesMenu from '../CitiesMenu/CitiesMenu';

// styles
import './Cities.css';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../../actions';

function Cities() {
  console.log('cities');
  const dispath = useDispatch();
  const isMenuOpened = useSelector(state => state.isMenuOpened);

  // if (isMenuOpened) {
  //   return <CitiesMenu />;
  // }

  return (
    <div className="cities">
      <div className="toggle">
        <RiMenu2Line
          className="toggle-btn btn"
          onClick={() => dispath(openMenu())}
        />
        <span className="toggle-text">ქალაქის არჩევა</span>
      </div>
      <CitiesMenu show={isMenuOpened} />
    </div>
  );
}

export default Cities;
