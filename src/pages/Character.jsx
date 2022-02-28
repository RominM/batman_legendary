import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router';
import Pic from '../components/Pic';
import Slider from '../components/Slider';

import characters from './../data/data.json';

const Character = () => {
  const currentRouteParams = useParams();
  const characterId = currentRouteParams.id;

  const currentCharacter = characters.find(
    (character) => character.id === characterId
  );

  // if (!currentCharacter) {
  //   return <Navigate to="/not-found" />;
  // }

  return (
    <div>
      <Slider />
      <div>
        <img
          src={currentCharacter.picture}
          alt={'image de ' + currentCharacter.super}
        />
      </div>
    </div>
  );
};

export default Character;
