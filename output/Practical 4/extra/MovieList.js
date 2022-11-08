import Movie from "./Movie.js";
export default function MovieList(props) {
  return props.movies.map(function (movie) {
    return /*#__PURE__*/React.createElement(Movie, {
      url: movie.url,
      title: movie.title,
      rating: movie.rating
    });
  });
}

/**
 * <MovieList movies={[
 *      {url: "https://....", title: "Black Adam", rating: 40},
 *      {...}
 * ]} />
 */