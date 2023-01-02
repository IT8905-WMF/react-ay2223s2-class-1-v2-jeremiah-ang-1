import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import AboutMe from "./Practical 10/AboutMe.js";
import MovePage from "./Practical 10/MovePage.js";
import RootPage from "./Practical 10/RootPage.js";
import RockPaperScissors from "./RockPaperScissors.js";
const router = createHashRouter([{
  path: '/',
  element: /*#__PURE__*/React.createElement(RootPage, null),
  children: [{
    path: '/',
    element: /*#__PURE__*/React.createElement(RockPaperScissors, null)
  }, {
    path: 'about',
    element: /*#__PURE__*/React.createElement(AboutMe, null)
  }, {
    path: 'move/:moveId',
    element: /*#__PURE__*/React.createElement(MovePage, null)
  }]
}]);
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));