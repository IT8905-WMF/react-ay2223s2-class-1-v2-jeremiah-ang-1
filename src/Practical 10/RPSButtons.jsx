import React from 'react';
import RPSButton from '../Practical 9/RPSButton';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './recordSlice';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    const records = useSelector(function (store) {
        return store.record.value;
    });
    const dispatch = useDispatch();

    return (
        <div>
            {moves.map(function (move) {
                return (
                    <RPSButton
                        key={move}
                        records={records.filter(function (record) {
                            return !record.deleted && record.move === move;
                        })}
                        move={move}
                        onButtonPressed={function (move) {
                            dispatch(add(move));
                        }}
                    />
                );
            })}
        </div>
    );
}
