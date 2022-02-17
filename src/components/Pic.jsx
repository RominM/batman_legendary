import React from 'react';
import characters from './../data/data.json';

const Pic = (props) => {
  return (
    <div>
      <div className="hello">
        <img src={characters.picture} alt={characters.super} />
      </div>
    </div>
  );
};

export default Pic;
