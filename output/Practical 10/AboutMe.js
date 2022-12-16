import Age from "../Practical 9/Age.js";
import Hello from "../Practical 2/Hello.js";
import HobbyList from "../Practical 4/HobbyList.js";
import MovieList from "../Practical 4/extra/MovieList.js";
import TitleLi from "../Practical 4/TitleLi.js";
export default function AboutMe(props) {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(function () {
    fetch('/dist/movies.json').then(function (response) {
      return response.json();
    }).then(function (movies) {
      setMovies(movies);
    });
  }, []);
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