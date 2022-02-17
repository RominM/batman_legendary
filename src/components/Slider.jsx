import React from 'react';
import { Link } from 'react-router-dom';
import characters from './../data/data.json';

const Slider = () => {
  return (
    <section className="slider">
      <ul className="super-ul">
        {characters.map((character) => (
          <Link to={'/character/' + character.super} key={character.id}>
            <li className={character.super + '_card super-li'}>
              <span>{character.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Slider;
