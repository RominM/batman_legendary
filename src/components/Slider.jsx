import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, Outlet, useParams } from 'react-router';

import characters from './../data/data.json';
import TestChara from '../pages/Character';

const Slider = () => {
  // const currentRouteParams = useParams();
  // const characterId = currentRouteParams.id;

  // const currentCharacte = characters.find(
  //   (character) => character.id === characterId
  // );
  // console.log(currentCharacte);

  // if (!currentCharacte) {
  //   return <Navigate to="/not-found" />;
  // }

  return (
    <section className="slider">
      <ul className="super-ul">
        {characters.map((character) => (
          <Link to={'/character/' + character.id} key={character.id}>
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
