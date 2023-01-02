import Age from '../Practical 9/Age';
import Hello from '../Practical 2/Hello';
import HobbyList from '../Practical 4/HobbyList';
import MovieList from '../Practical 4/extra/MovieList';
import TitleLi from '../Practical 4/TitleLi';

export default function AboutMe(props) {
    const [movies, setMovies] = React.useState([]);
    React.useEffect(function () {
        fetch('/dist/movies.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (movies) {
                setMovies(movies);
            });
    }, []);
    return (
        <div>
            <Hello />
            <ol>
                <TitleLi title="name" text="Jeremiah Ang" />
                <Age value={1} />
                <li>
                    <b>Hobbies:</b>
                    <ol>
                        <HobbyList
                            hobbies={[{ title: 'Swim', emoji: '🏊' }, { title: 'Run' }, { title: 'Game', emoji: '🎮' }]}
                        />
                    </ol>
                </li>
                <li>
                    <b>Movies:</b>
                    <ol>
                        <MovieList movies={movies} />
                    </ol>
                </li>
            </ol>
        </div>
    );
}
