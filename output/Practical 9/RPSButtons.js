import React from 'react';
import RPSButton from "./RPSButton.js";
const moves = ['Rock', 'Paper', 'Scissors'];
export default function RPSButtons(props) {
  return /*#__PURE__*/React.createElement("div", null, moves.map(function (move) {
    return /*#__PURE__*/React.createElement(RPSButton, {
      key: move,
      records: props.records.filter(function (record) {
        return !record.deleted && record.move === move;
      }),
      move: move,
      onButtonPressed: props.onButtonPressed
    });
  }));
}