import Age from './Practical 9/Age';
import Hello from './Practical 2/Hello';
import HobbyList from './Practical 4/HobbyList';
import MovieList from './Practical 4/extra/MovieList';
import TitleLi from './Practical 4/TitleLi';

const movies = [
    {
        url: 'https://www.rottentomatoes.com/m/black_adam',
        title: 'Black Adam',
        rating: 40,
    },
    {
        url: 'https://www.rottentomatoes.com/m/enola_holmes_2',
        title: 'Enola Holmes 2',
        rating: 95,
    },
    {
        url: 'https://www.rottentomatoes.com/m/my_policeman',
        title: 'My Policeman',
    },
];

function App(props) {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
