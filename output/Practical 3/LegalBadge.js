export default function LegalBadge(props) {
  const currentAge = new Date().getFullYear() - props.birthYear;
  return currentAge >= 18 ? /*#__PURE__*/React.createElement("p", null, "Legal!") : /*#__PURE__*/React.createElement("p", null, "Not Legal!");
}