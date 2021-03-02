import React, { useEffect, useRef } from 'react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import './Search.css';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch, openSearch, setCity } from '../../actions';

const Search = () => {
  const isSearchOpen = useSelector(state => state.isSearchOpen);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    const closeSearchMenu = e => {
      if (isSearchOpen && e.target !== inputRef.current) {
        dispatch(closeSearch());
      }
    };
    document.addEventListener('click', closeSearchMenu);
    return () => {
      document.removeEventListener('click', closeSearchMenu);
    };
  });

  useEffect(() => {
    inputRef.current.focus();
  }, [isSearchOpen]);

  const keyHandler = e => {
    if (e.key === 'Enter') {
      dispatch(setCity(inputRef.current.value));
    }
  };

  return (
    <div className="search flex fdc aife">
      <IoSearchCircleOutline
        onClick={() => {
          dispatch(openSearch());
        }}
        className={`${isSearchOpen ? 'search-btn__hide' : 'search-btn'} btn`}
      />
      <span className="search-text">ქალაქის ძიება</span>

      <input
        type="text"
        className={`search-input ${
          isSearchOpen ? 'search-input__open' : 'search-input__close'
        }`}
        ref={inputRef}
        onKeyDown={keyHandler}
      />
    </div>
  );
};

export default Search;
