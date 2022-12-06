import { emoji, IsEmojiContext } from './IsEmojiContext';

export default function RPSButton(props) {
    const isEmoji = React.useContext(IsEmojiContext);

    const winCount = props.records.filter(function (record) {
        return record.result === 'Win';
    }).length;
    const totalCount = props.records.length;
    const winPercentage = ((winCount / totalCount) * 100).toFixed(2);
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <button
            onClick={function () {
                props.onButtonPressed(props.move);
            }}
            onMouseEnter={function () {
                setIsHovered(true);
            }}
            onMouseLeave={function () {
                setIsHovered(false);
            }}
        >
            {isEmoji ? emoji[props.move] : props.move} {isHovered && `(${totalCount === 0 ? 0 : winPercentage}%)`}
        </button>
    );
}
