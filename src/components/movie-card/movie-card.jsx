import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onMovieCardHover, onMovieCardTitleClick} = props;

  const handleMoviecardTitleClick = (evt) => {
    evt.preventDefault();
    onMovieCardTitleClick(movie);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieCardHover(movie)}>
      <div className="small-movie-card__image">
        <img src={movie.previewImage} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={handleMoviecardTitleClick}
          className="small-movie-card__link"
          href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
};

export default MovieCard;