import React, { useState, useEffect } from 'react';
import Film from './Film';

const StarWars = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((res) => res.json())
      .then((film) => setFilms(film.results));
  }, []);

  return <Film films={films} />;
};

export default StarWars;
