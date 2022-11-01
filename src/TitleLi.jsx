export default function TitleLi(props) {
    return (
        <li>
            <b
                style={{
                    textTransform: 'capitalize',
                }}
            >
                {props.title}:
            </b>
            {props.text}
        </li>
    );
}
