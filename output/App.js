import Hello from "./Hello.js";
import Hobby from "./Hobby.js";
import TitleLi from "./TitleLi.js";
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hello, null), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "name",
    text: "Jeremiah Ang"
  }), /*#__PURE__*/React.createElement(TitleLi, {
    title: "age",
    text: "18"
  }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Hobbies:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(Hobby, {
    title: "Swim",
    emoji: "\uD83C\uDFCA"
  }), /*#__PURE__*/React.createElement(Hobby, {
    title: "Run",
    emoji: "\uD83C\uDFC3"
  }), /*#__PURE__*/React.createElement(Hobby, {
    title: "Game",
    emoji: "\uD83C\uDFAE"
  })))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));