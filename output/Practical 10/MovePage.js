import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TitleLi from "../Practical 5/TitleLi.js";
export default function MovePage(props) {
  const records = useSelector(function (state) {
    return state.record.value;
  });
  const params = useParams();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "Move #",
    text: params.moveId
  }), /*#__PURE__*/React.createElement(TitleLi, {
    title: "Move",
    text: records[params.moveId - 1].move
  }), /*#__PURE__*/React.createElement(TitleLi, {
    title: "Result",
    text: records[params.moveId - 1].result
  })));
}