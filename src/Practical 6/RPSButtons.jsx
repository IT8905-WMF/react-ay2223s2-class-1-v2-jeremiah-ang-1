export default function RPSButtons(props) {
    return (
        <div>
            <button
                onClick={function () {
                    props.onButtonPressed('Rock');
                }}
            >
                Rock
            </button>
            <button
                onClick={function () {
                    props.onButtonPressed('Paper');
                }}
            >
                Paper
            </button>
            <button
                onClick={function () {
                    props.onButtonPressed('Scissors');
                }}
            >
                Scissors
            </button>
        </div>
    );
}
