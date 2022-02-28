import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router';
import Pic from '../components/Pic';
import Slider from './../components/Slider';
import characters from './../data/data.json';

const Characters = () => {
  return (
    <div style={{ color: '#fff' }}>
      <Slider />
      <Outlet />
    </div>
  );
};

export default Characters;
