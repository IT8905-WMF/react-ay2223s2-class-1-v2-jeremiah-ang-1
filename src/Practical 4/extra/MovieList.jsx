import Movie from './Movie';

export default function MovieList(props) {
    return props.movies.map(function (movie) {
        return <Movie url={movie.url} title={movie.title} rating={movie.rating} />;
    });
}

/**
 * <MovieList movies={[
 *      {url: "https://....", title: "Black Adam", rating: 40},
 *      {...}
 * ]} />
 */
