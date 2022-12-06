import RPSButtons from './Practical 8/RPSButtons';
import RPSRecords from './Practical 8/RPSRecords';
import RPSInput from './Practical 7/RPSInput';
import recordsReducer from './Practical 8/recordsReducer';
import { IsEmojiContext } from './Practical 8/IsEmojiContext';

function RockPaperScissors(props) {
    const [records, dispatch] = React.useReducer(recordsReducer, []);
    const [isEmoji, setIsEmoji] = React.useState(false);
    return (
        <IsEmojiContext.Provider value={isEmoji}>
            <div>
                <h1>Rock Paper Scissors</h1>
                <RPSButtons
                    onButtonPressed={function (move) {
                        dispatch({
                            name: 'add',
                            move: move,
                        });
                    }}
                    records={records}
                />
                <RPSInput
                    onAdd={function (move, result) {
                        dispatch({
                            name: 'force add',
                            move: move,
                            result: result,
                        });
                    }}
                />
                <button
                    onClick={function () {
                        setIsEmoji(!isEmoji);
                    }}
                >
                    Toggle Emoji
                </button>
                <RPSRecords
                    records={records}
                    onClickRecord={function (index) {
                        dispatch({
                            name: 'remove',
                            index: index,
                        });
                    }}
                />
            </div>
        </IsEmojiContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RockPaperScissors />);
