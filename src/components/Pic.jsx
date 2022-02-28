import React from 'react';

const Pic = (props) => {
  const children = props.currentCharacter;
  console.log(children.picture);
  return (
    <div>
      <img src={children.picture} alt={'image de ' + children.super} />
    </div>
  );
};

export default Pic;
