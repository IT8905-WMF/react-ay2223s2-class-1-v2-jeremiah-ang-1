export default function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", {
    style: {
      textTransform: 'capitalize'
    }
  }, props.title, ":"), props.text);
}