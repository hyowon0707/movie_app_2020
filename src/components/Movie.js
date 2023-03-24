import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, title, year, summary, poster, genres }) {
  // console.log({ id, title, year, summary, poster, genres });
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie-detail`,
        }}
        state={{ test: { title } }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genres, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genres}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
