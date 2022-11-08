import Hobby from "./Hobby.js";
export default function HobbyList(props) {
  return props.hobbies.map(function (hobby) {
    return /*#__PURE__*/React.createElement(Hobby, {
      title: hobby.title,
      emoji: hobby.emoji
    });
  });
}