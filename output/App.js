import Age from "./Practical 5/Age.js";
import Hello from "./Practical 2/Hello.js";
import HobbyList from "./Practical 4/HobbyList.js";
import MovieList from "./Practical 4/extra/MovieList.js";
import TitleLi from "./Practical 4/TitleLi.js";
const movies = [{
  url: 'https://www.rottentomatoes.com/m/black_adam',
  title: 'Black Adam',
  rating: 40
}, {
  url: 'https://www.rottentomatoes.com/m/enola_holmes_2',
  title: 'Enola Holmes 2',
  rating: 95
}, {
  url: 'https://www.rottentomatoes.com/m/my_policeman',
  title: 'My Policeman'
}];
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hello, null), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "name",
    text: "Jeremiah Ang"
  }), /*#__PURE__*/React.createElement(Age, {
    value: 1
  }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Hobbies:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(HobbyList, {
    hobbies: [{
      title: 'Swim',
      emoji: '🏊'
    }, {
      title: 'Run'
    }, {
      title: 'Game',
      emoji: '🎮'
    }]
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Movies:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(MovieList, {
    movies: movies
  })))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));