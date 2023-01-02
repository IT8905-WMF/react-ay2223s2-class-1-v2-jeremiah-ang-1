import { useDispatch } from 'react-redux';
import { forceAdd } from "./recordSlice.js";
export default function RPSInput(props) {
  const dispatch = useDispatch();
  const [selectedMove, setSelectedMove] = React.useState('Rock');
  const [isWin, setIsWin] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
    value: selectedMove,
    onChange: function (event) {
      setSelectedMove(event.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Rock"
  }, "Rock"), /*#__PURE__*/React.createElement("option", {
    value: "Paper"
  }, "Paper"), /*#__PURE__*/React.createElement("option", {
    value: "Scissors"
  }, "Scissors")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isWin,
    onChange: function (event) {
      setIsWin(event.target.checked);
    }
  }), ' ', "Win?", /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      let result = 'Lose';
      if (isWin) result = 'Win';
      dispatch(forceAdd({
        move: selectedMove,
        result
      }));
    }
  }, "Add"));
}