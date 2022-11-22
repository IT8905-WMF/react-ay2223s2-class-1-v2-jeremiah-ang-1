export default function RPSButtons(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      props.onButtonPressed('Rock');
    }
  }, "Rock"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      props.onButtonPressed('Paper');
    }
  }, "Paper"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      props.onButtonPressed('Scissors');
    }
  }, "Scissors"));
}