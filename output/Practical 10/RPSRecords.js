import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from "./recordSlice.js";
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
  const winPercentage = numberOfWin / numberOfRecords * 100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Records (Win %: ", isNaN(winPercentage) ? 0 : winPercentage, "%): "), /*#__PURE__*/React.createElement("ol", null, records.map(function (record, index) {
    return !record.deleted && /*#__PURE__*/React.createElement("li", {
      key: index,
      onClick: function () {
        dispatch(remove(index));
      }
    }, record.result, " (", record.move, ")");
  })));
}