import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <h2 className="logo-font">Tottes Tattoo</h2>
        </div>
        <nav className={showMenu && 'show-main-menu'}>
          <ul>
            <li>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                }}
                to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                }}
                to={'/booking'}>
                Booking
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="burger-btn"
          onClick={() => {
            setShowMenu(!showMenu);
          }}>
          {showMenu ? (
            <span className="close-burger-btn"></span>
          ) : (
            <span></span>
          )}
        </button>
      </div>
    </>
  );
};

export default HeaderComponent;
