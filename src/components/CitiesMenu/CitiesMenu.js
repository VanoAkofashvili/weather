import React from 'react';
import { AiOutlineCloseCircle as CloseBtn } from 'react-icons/ai';
import './CitiesMenu.css';

// redux
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../actions';

const CitiesMenu = ({ show }) => {
  const dispatch = useDispatch();

  return (
    <section
      className={`cities-menu ${show ? 'show-menu' : 'hide-menu'} flex jsc alc`}
    >
      <div className="city-container">
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
        <p>Gori</p>
      </div>

      <CloseBtn className="close-btn" onClick={() => dispatch(closeMenu())} />
    </section>
  );
};

export default CitiesMenu;
