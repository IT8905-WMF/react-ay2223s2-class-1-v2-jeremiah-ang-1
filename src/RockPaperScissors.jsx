import RPSButtons from './Practical 7/RPSButtons';
import RPSRecords from './Practical 7/RPSRecords';
import RPSInput from './Practical 7/RPSInput';

function RockPaperScissors(props) {
    const [records, setRecords] = React.useState([]);
    return (
        <div>
            <h1>Rock Paper Scissors</h1>
            <RPSButtons
                onButtonPressed={function (move, forcedResult) {
                    const randomNumber = Math.random();
                    let result;
                    if (randomNumber <= 1 / 3) result = 'Win';
                    else if (randomNumber <= 2 / 3) result = 'Lose';
                    else result = 'Draw';
                    setRecords([...records, { result: forcedResult || result, move: move }]);
                }}
                records={records}
            />
            <RPSInput
                onAdd={function (move, result) {
                    console.log(move, result);
                    setRecords([...records, { result: result, move: move }]);
                }}
            />
            <RPSRecords
                records={records}
                onClickRecord={function (index) {
                    records[index].deleted = true;
                    setRecords([...records]);
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RockPaperScissors />);
