import RPSButtons from "./Practical 7/RPSButtons.js";
import RPSRecords from "./Practical 7/RPSRecords.js";
import RPSInput from "./Practical 7/RPSInput.js";
function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Rock Paper Scissors"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: function (move, forcedResult) {
      const randomNumber = Math.random();
      let result;
      if (randomNumber <= 1 / 3) result = 'Win';else if (randomNumber <= 2 / 3) result = 'Lose';else result = 'Draw';
      setRecords([...records, {
        result: forcedResult || result,
        move: move
      }]);
    },
    records: records
  }), /*#__PURE__*/React.createElement(RPSInput, {
    onAdd: function (move, result) {
      console.log(move, result);
      setRecords([...records, {
        result: result,
        move: move
      }]);
    }
  }), /*#__PURE__*/React.createElement(RPSRecords, {
    records: records,
    onClickRecord: function (index) {
      records[index].deleted = true;
      setRecords([...records]);
    }
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(RockPaperScissors, null));