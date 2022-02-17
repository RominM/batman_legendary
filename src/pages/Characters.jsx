import React from 'react';
import { Navigate, useParams } from 'react-router';
import Pic from '../components/Pic';
import Slider from './../components/Slider';
import characters from './../data/data.json';

const Characters = () => {
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
    <div style={{ color: '#fff' }}>
      <Slider />
      <Pic />
    </div>
  );
};

export default Characters;
