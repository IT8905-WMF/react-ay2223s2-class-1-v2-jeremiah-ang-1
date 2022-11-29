import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './recordSlice';

export default function RPSRecords(props) {
    const records = useSelector(function (store) {
        return store.record.value;
    });
    const dispatch = useDispatch();

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
                        !record.deleted && (
                            <li
                                key={index}
                                onClick={function () {
                                    dispatch(remove(index));
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
