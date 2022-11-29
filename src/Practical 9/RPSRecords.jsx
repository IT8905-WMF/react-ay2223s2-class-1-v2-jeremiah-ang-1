import React from 'react';
export default function RPSRecords(props) {
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
                                {record.result} ({record.move})
                            </li>
                        )
                    );
                })}
            </ol>
        </div>
    );
}
