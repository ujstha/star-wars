import React from 'react';
import FontChange from './components/FontChange';
import StarWars from './components/StarWars';
import './scss/app.scss';

const App = () => {
  return (
    <div className='app'>
      <FontChange />
      <StarWars />
    </div>
  );
};

export default App;
