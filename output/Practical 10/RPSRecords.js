import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Practical 9/recordSlice.js';
import { emoji, IsEmojiContext } from "../Practical 8/IsEmojiContext.js";
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
  const winPercentage = numberOfWin / numberOfRecords * 100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Records (Win %: ", isNaN(winPercentage) ? 0 : winPercentage, "%): "), /*#__PURE__*/React.createElement("ol", null, records.map(function (record, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, record.result, " (", isEmoji ? emoji[record.move] : record.move, ")", /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        dispatch(remove(index));
      }
    }, "Remove"), /*#__PURE__*/React.createElement(Link, {
      to: `move/${index + 1}`
    }, "Details"));
  })));
}