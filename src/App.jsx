import Hello from './Hello';
import Hobby from './Hobby';
import TitleLi from './TitleLi';

function App(props) {
    return (
        <div>
            <Hello />
            <ol>
                <TitleLi title="name" text="Jeremiah Ang" />
                <TitleLi title="age" text="18" />
                <li>
                    <b>Hobbies:</b>
                    <ol>
                        <Hobby title="Swim" emoji="🏊" />
                        <Hobby title="Run" emoji="🏃" />
                        <Hobby title="Game" emoji="🎮" />
                    </ol>
                </li>
            </ol>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
