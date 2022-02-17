import React from 'react';

const Pic = (props) => {
  //   const children = props.children;
  const superName = props.hero;
  const pic = props.picture;
  return (
    <div>
      <div class="hello">
        <img src={pic} alt={superName} />
      </div>
      <p>{superName}</p>
      PIC
    </div>
  );
};

export default Pic;
