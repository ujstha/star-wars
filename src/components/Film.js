import React, { useState } from 'react';
import FilmDetail from './FilmDetail';

const Film = ({ films }) => {
  const [url, setUrl] = useState(null);
  const [cssClass, setCssClass] = useState('');

  const showFilmDetail = (activeUrl) => {
    setUrl(activeUrl);
    setCssClass('detail-crawl');
  };

  return (
    <div className='films'>
      <h2>Star Wars Movie Installements</h2>
      <hr />
      <div className='film-list'>
        <div className='film-titles'>
          {films.map((film) => (
            <h3 onClick={() => showFilmDetail(film.url)} className='title'>
              {film.title}{' '}
            </h3>
          ))}
        </div>
        {url && <FilmDetail url={url} className={cssClass} />}
      </div>
    </div>
  );
};

export default Film;
