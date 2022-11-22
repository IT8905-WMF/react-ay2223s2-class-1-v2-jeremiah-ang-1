export default function RPSRecords(props) {
    const numberOfRecords = props.records.length;
    const numberOfWin = props.records.filter(function (record) {
        return record.result === 'Win';
    }).length;
    const winPercentage = (numberOfWin / numberOfRecords) * 100;
    return (
        <div>
            <p>Records (Win %: {winPercentage}%): </p>
            <ol>
                {props.records.map(function (record) {
                    return (
                        <li>
                            {record.result} ({record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
