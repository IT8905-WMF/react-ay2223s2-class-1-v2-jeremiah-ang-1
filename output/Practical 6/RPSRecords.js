export default function RPSRecords(props) {
  const numberOfRecords = props.records.length;
  const numberOfWin = props.records.filter(function (record) {
    return record.result === 'Win';
  }).length;
  const winPercentage = numberOfWin / numberOfRecords * 100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Records (Win %: ", winPercentage, "%): "), /*#__PURE__*/React.createElement("ol", null, props.records.map(function (record) {
    return /*#__PURE__*/React.createElement("li", null, record.result, " (", record.move, ")");
  })));
}