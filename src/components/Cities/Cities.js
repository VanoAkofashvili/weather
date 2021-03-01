import React from 'react';

import { RiMenu2Line } from 'react-icons/ri';
import { AiOutlineCloseCircle as CloseBtn } from 'react-icons/ai';

// styles
import './Cities.css';

function Cities() {
  return (
    <div className="cities">
      <RiMenu2Line className="cities-toggle" />
      <span className="toggle-text">ქალაქის არჩევა</span>
      <section className="cities-list">
        <div>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
          <p>გორი</p>
        </div>
        <CloseBtn />
      </section>
    </div>
  );
}

export default Cities;
