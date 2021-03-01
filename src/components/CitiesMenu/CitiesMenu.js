import React, { useEffect } from 'react';
import { AiOutlineCloseCircle as CloseBtn } from 'react-icons/ai';
import './CitiesMenu.css';

// redux
import { useDispatch } from 'react-redux';
import { closeMenu, setLoading, setLocation } from '../../actions';

import { cities } from '../../cities';

const CitiesMenu = ({ show }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const eventHandler = e => {
      if (e.key == 'Escape') {
        dispatch(closeMenu());
      }
    };

    document.addEventListener('keydown', eventHandler);

    return () => {
      document.removeEventListener('keydown', eventHandler);
    };
  }, []);

  return (
    <section
      className={`cities-menu ${show ? 'show-menu' : 'hide-menu'} flex jsc alc`}
    >
      <div className="city-container">
        {cities.map((el, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                const [lat, lon] = el.location.split(',');
                dispatch(
                  setLocation(
                    parseFloat((+lat).toFixed(4)),
                    parseFloat(+lon).toFixed(4)
                  )
                );
                dispatch(closeMenu());
              }}
            >
              {el.name_en}
            </p>
          );
        })}
      </div>

      <CloseBtn className="close-btn" onClick={() => dispatch(closeMenu())} />
    </section>
  );
};

export default CitiesMenu;
