import Hobby from "../Practical 3/Hobby.js";
export default function HobbyList(props) {
  return props.hobbies.filter(function (hobby) {
    return hobby.emoji;
  }).map(function (hobby, index) {
    return /*#__PURE__*/React.createElement(Hobby, {
      key: index,
      title: hobby.title,
      emoji: hobby.emoji
    });
  });
}