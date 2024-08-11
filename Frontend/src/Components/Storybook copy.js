// src/components/IntegratedFlipbookPage.js
import React, { useState } from 'react';
import './Storybook.css';
import Flip1 from './Flipbooks/Flip1';
import Flip2 from './Flipbooks/Flip2';
import Flip3 from './Flipbooks/Flip3';
import Flip4 from './Flipbooks/Flip4';
import Flip5 from './Flipbooks/Flip5';
import Flip6 from './Flipbooks/Flip6';
import Flip7 from './Flipbooks/Flip7';
import Flip8 from './Flipbooks/Flip8';
import Flip9 from './Flipbooks/Flip9';

const Storybook = () => {
  const [ageRange, setAgeRange] = useState('0-3');

  const flipbooksByAgeRange = {
    '0-3': [Flip1, Flip2, Flip3],
    '4-6': [Flip4, Flip5, Flip6],
    '7-12': [Flip7, Flip8, Flip9]
  };

  const titlesByAgeRange = {
    '0-3': ['Elvis’ Big Adventure', 'Woof-woof!', 'Caterpillar Looks For A Shoe'],
    '4-6': ['Dance Khuzwayo, Dance', 'Ouma’s Amazing Flowers', 'The Forgetful Elephant'],
    '7-12': ['Flynn', 'Carrot Shenanigans with Pirate Petey!', 'Tiny the Christmas Elf']
  };

  return (
    <div className="flipbook-page">
      <div className="age-selector">
        <button onClick={() => setAgeRange('0-3')}>0-3</button>
        <button onClick={() => setAgeRange('4-6')}>4-6</button>
        <button onClick={() => setAgeRange('7-12')}>7-12</button>
      </div>
      <h3 id='ageTag'>Age Category: {ageRange}</h3>
      <div className="flipbook-container">
        {flipbooksByAgeRange[ageRange].map((FlipbookComponent, index) => (
          <div key={index} className="flipbook-item">
            <FlipbookComponent />
            <h3 className="flipbook-title">{titlesByAgeRange[ageRange][index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storybook;
