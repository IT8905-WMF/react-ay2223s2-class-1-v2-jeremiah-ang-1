import React from 'react';
export default function RPSRecords(props) {
  const numberOfRecords = props.records.filter(function (record) {
    return !record.deleted;
  }).length;
  const numberOfWin = props.records.filter(function (record) {
    return !record.deleted && record.result === 'Win';
  }).length;
  const winPercentage = numberOfWin / numberOfRecords * 100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Records (Win %: ", isNaN(winPercentage) ? 0 : winPercentage, "%): "), /*#__PURE__*/React.createElement("ol", null, props.records.map(function (record, index) {
    return !record.deleted && /*#__PURE__*/React.createElement("li", {
      onClick: function () {
        props.onClickRecord(index);
      }
    }, record.result, " (", record.move, ")");
  })));
}