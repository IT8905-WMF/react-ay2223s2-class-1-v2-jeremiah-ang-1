import Hobby from './Hobby';

export default function HobbyList(props) {
    return props.hobbies.map(function (hobby) {
        return <Hobby title={hobby.title} emoji={hobby.emoji} />;
    });
}
