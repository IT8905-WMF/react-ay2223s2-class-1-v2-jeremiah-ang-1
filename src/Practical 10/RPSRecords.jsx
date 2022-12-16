import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Practical 9/recordSlice.js';
import { emoji, IsEmojiContext } from '../Practical 8/IsEmojiContext';
import { Link } from 'react-router-dom';

export default function RPSRecords(props) {
    const records = useSelector(function (store) {
        return store.record.value;
    });
    const dispatch = useDispatch();

    const isEmoji = React.useContext(IsEmojiContext);
    const numberOfRecords = records.filter(function (record) {
        return !record.deleted;
    }).length;
    const numberOfWin = records.filter(function (record) {
        return !record.deleted && record.result === 'Win';
    }).length;
    const winPercentage = (numberOfWin / numberOfRecords) * 100;
    return (
        <div>
            <p>Records (Win %: {isNaN(winPercentage) ? 0 : winPercentage}%): </p>
            <ol>
                {records.map(function (record, index) {
                    return (
                        <li key={index}>
                            {record.result} ({isEmoji ? emoji[record.move] : record.move})
                            <button
                                onClick={function () {
                                    dispatch(remove(index));
                                }}
                            >
                                Remove
                            </button>
                            <Link to={`move/${index + 1}`}>Details</Link>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
