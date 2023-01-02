import TitleLi from "./TitleLi.js";
export default function Age(props) {
  const emoji = props.value >= 18 ? '' : '🔞';
  return /*#__PURE__*/React.createElement(TitleLi, {
    title: "Age",
    text: emoji + props.value,
    isHidden: true
  });
}