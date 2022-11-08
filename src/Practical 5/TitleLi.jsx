export default function TitleLi(props) {
    return (
        <li
            onMouseEnter={function () {
                props.onMouseEnter();
            }}
            onMouseLeave={function () {
                props.onMouseLeave();
            }}
        >
            <b
                style={{
                    textTransform: 'capitalize',
                }}
            >
                {props.title}:
            </b>
            {!props.isHidden && props.text}
        </li>
    );
}
