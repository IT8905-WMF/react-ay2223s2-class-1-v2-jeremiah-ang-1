export default function Movie(props) {
    // let emoji = '❓';
    // if (props.rating >= 50) {
    //     emoji = '👍';
    // } else if (props.rating < 50) {
    //     emoji = '👎';
    // }

    const emoji = props.rating >= 50 ? '👍' : props.rating < 50 ? '👎' : '❓';

    return (
        <li>
            <a href={props.url}>{props.title}</a> ({emoji}
            {props.rating}%)
        </li>
    );
}

// <Movie url="https://......." title="Black Adam" rating={0.4} />
