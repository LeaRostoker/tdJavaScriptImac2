import React, { useEffect, useState } from 'react';
import './ex4.css';
import DisplayHero from './hero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });


  return (
    <div>
      <p>Here is a list of great superheroes !</p>
      <DisplayHero 
      name={superheroes[0].name} //doesn't work and i don't know why :'(
      />
    </div>
  );
};
