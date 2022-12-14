import RPSButton from './RPSButton';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    return (
        <div>
            {moves.map(function (move) {
                return (
                    <RPSButton
                        records={props.records.filter(function (record) {
                            return !record.deleted && record.move === move;
                        })}
                        move={move}
                        onButtonPressed={props.onButtonPressed}
                    />
                );
            })}
        </div>
    );
}
