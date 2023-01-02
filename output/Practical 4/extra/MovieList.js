import Movie from "./Movie.js";
export default function MovieList(props) {
  return props.movies.map(function (movie, index) {
    return /*#__PURE__*/React.createElement(Movie, {
      key: index,
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