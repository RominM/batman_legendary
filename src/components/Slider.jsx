import React from 'react';
import { Link } from 'react-router-dom';
import figure from './../data/figure.json';

const Slider = () => {
  return (
    <section className="slider">
      <ul className="super-ul">
        {figure.map((fig) => (
          <Link to={'/' + fig.superName + '/'} key={fig.id}>
            <li className={fig.superName + '_card super-li'}>
              <span>{fig.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Slider;
