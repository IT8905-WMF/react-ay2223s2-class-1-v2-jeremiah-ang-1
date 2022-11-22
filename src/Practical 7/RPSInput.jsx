export default function RPSInput(props) {
    const [selectedMove, setSelectedMove] = React.useState('Rock');
    const [isWin, setIsWin] = React.useState(false);
    return (
        <div>
            <select
                value={selectedMove}
                onChange={function (event) {
                    setSelectedMove(event.target.value);
                }}
            >
                <option value="Rock">Rock</option>
                <option value="Paper">Paper</option>
                <option value="Scissors">Scissors</option>
            </select>
            <input
                type="checkbox"
                checked={isWin}
                onChange={function (event) {
                    setIsWin(event.target.checked);
                }}
            />{' '}
            Win?
            <button
                onClick={function () {
                    let result = 'Lose';
                    if (isWin) result = 'Win';
                    props.onAdd(selectedMove, result);
                }}
            >
                Add
            </button>
        </div>
    );
}
