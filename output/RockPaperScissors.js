import { Provider } from 'react-redux';
import RPSButtons from "./Practical 9/RPSButtons.js";
import RPSRecords from "./Practical 9/RPSRecords.js";
import RPSInput from "./Practical 9/RPSInput.js";
import recordsReducer from "./Practical 8/recordsReducer.js";
import { IsEmojiContext } from "./Practical 8/IsEmojiContext.js";
import store from "./Practical 9/storage.js";
function RockPaperScissors(props) {
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const [isEmoji, setIsEmoji] = React.useState(false);
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(IsEmojiContext.Provider, {
    value: isEmoji
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Rock Paper Scissors"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: function (move) {
      dispatch({
        name: 'add',
        move: move
      });
    },
    records: records
  }), /*#__PURE__*/React.createElement(RPSInput, {
    onAdd: function (move, result) {
      dispatch({
        name: 'force add',
        move: move,
        result: result
      });
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setIsEmoji(!isEmoji);
    }
  }, "Toggle Emoji"), /*#__PURE__*/React.createElement(RPSRecords, {
    records: records,
    onClickRecord: function (index) {
      dispatch({
        name: 'remove',
        index: index
      });
    }
  }))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(RockPaperScissors, null));