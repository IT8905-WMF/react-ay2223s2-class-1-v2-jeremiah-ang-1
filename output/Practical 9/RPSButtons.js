import RPSButton from "../Practical 8/RPSButton.js";
import { useDispatch, useSelector } from 'react-redux';
import { add } from "./recordSlice.js";
const moves = ['Rock', 'Paper', 'Scissors'];
export default function RPSButtons(props) {
  const records = useSelector(function (store) {
    return store.record.value;
  });
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("div", null, moves.map(function (move) {
    return /*#__PURE__*/React.createElement(RPSButton, {
      records: records.filter(function (record) {
        return !record.deleted && record.move === move;
      }),
      move: move,
      onButtonPressed: function (move) {
        dispatch(add(move));
      }
    });
  }));
}