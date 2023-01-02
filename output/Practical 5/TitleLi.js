export default function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: function () {
      props.onMouseEnter();
    },
    onMouseLeave: function () {
      props.onMouseLeave();
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      textTransform: 'capitalize'
    }
  }, props.title, ":"), !props.isHidden && props.text);
}