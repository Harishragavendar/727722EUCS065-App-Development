// src/components/IntegratedFlipbookPage.js
import React, { useState } from 'react';
import './Flippy.css';
import Flip1 from './Flip1';
import Flip2 from './Flip2';
import Flip3 from './Flip3';
import Flip4 from './Flip4';
import Flip5 from './Flip5';
import Flip6 from './Flip6';
import Flip7 from './Flip7';
import Flip8 from './Flip8';
import Flip9 from './Flip9';

const Flippy = () => {
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
    <div className="flipbook-page8">
      <div className="age-selector8">
        <button className='ageBtn8' onClick={() => setAgeRange('0-3')}>0-3</button>
        <button className='ageBtn8' onClick={() => setAgeRange('4-6')}>4-6</button>
        <button className='ageBtn8' onClick={() => setAgeRange('7-12')}>7-12</button>
      </div>
      <h3 id='ageTag8'>Age Category: {ageRange}</h3>
      <div className="flipbook-container8">
        {flipbooksByAgeRange[ageRange].map((FlipbookComponent, index) => (
          <div key={index} className="flipbook-item8">
            <FlipbookComponent />
            <h3 className="flipbook-title8">{titlesByAgeRange[ageRange][index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flippy;
