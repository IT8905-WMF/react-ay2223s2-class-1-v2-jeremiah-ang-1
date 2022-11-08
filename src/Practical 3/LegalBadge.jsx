export default function LegalBadge(props) {
    const currentAge = new Date().getFullYear() - props.birthYear;
    return currentAge >= 18 ? <p>Legal!</p> : <p>Not Legal!</p>;
}
