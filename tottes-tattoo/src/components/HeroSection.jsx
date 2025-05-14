import React from 'react';
import { NavLink } from 'react-router';

const HeroSection = () => {
  return (
    <div className="background-image-wrapper">
      <section className="hero-section">
        <div className="text-wrapper">
          <h1>Get a TATTOO like this badboy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
            aperiam laboriosam. Minima nobis est dolores velit debitis explicabo
            fuga aliquam, excepturi quisquam quas maiores, natus rerum
            cupiditate. Minus, optio.{' '}
          </p>

          <NavLink className="btn" to="/booking">
            Book now
          </NavLink>
        </div>
        {/* <Link to={'/booking'}>Booking</Link> */}
        <div className="img-wrapper">
          <img src="./src/assets/img/tattoo-back-hero.webp" alt="" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
