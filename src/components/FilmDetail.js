import React, { useEffect, useState } from 'react';

const FilmDetail = ({ url, className }) => {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((filmDetail) => {
        setFilm(filmDetail);
      });
  }, [url]);

  return (
    <div>
      <div className='fade'></div>
      <div className='film-detail'>
        <div className={className}>
          <h2 className='film-title'>{film.title}</h2>
          <div className='film-opening-crawl'>
            <p>{film.opening_crawl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
