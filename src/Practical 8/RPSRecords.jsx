import { emoji, IsEmojiContext } from './IsEmojiContext';

export default function RPSRecords(props) {
    const isEmoji = React.useContext(IsEmojiContext);
    const numberOfRecords = props.records.filter(function (record) {
        return !record.deleted;
    }).length;
    const numberOfWin = props.records.filter(function (record) {
        return !record.deleted && record.result === 'Win';
    }).length;
    const winPercentage = (numberOfWin / numberOfRecords) * 100;
    return (
        <div>
            <p>Records (Win %: {isNaN(winPercentage) ? 0 : winPercentage}%): </p>
            <ol>
                {props.records.map(function (record, index) {
                    return (
                        !record.deleted && (
                            <li
                                onClick={function () {
                                    props.onClickRecord(index);
                                }}
                            >
                                {record.result} ({isEmoji ? emoji[record.move] : record.move})
                            </li>
                        )
                    );
                })}
            </ol>
        </div>
    );
}
