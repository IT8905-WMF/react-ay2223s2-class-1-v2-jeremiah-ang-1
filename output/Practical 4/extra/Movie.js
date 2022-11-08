export default function Movie(props) {
  // let emoji = '❓';
  // if (props.rating >= 50) {
  //     emoji = '👍';
  // } else if (props.rating < 50) {
  //     emoji = '👎';
  // }

  const emoji = props.rating >= 50 ? '👍' : props.rating < 50 ? '👎' : '❓';
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: props.url
  }, props.title), " (", emoji, props.rating, "%)");
}

// <Movie url="https://......." title="Black Adam" rating={0.4} />