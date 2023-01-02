import TitleLi from '../Practical 5/TitleLi';

export default function Age(props) {
    const [isHidden, setIsHidden] = React.useState(true);
    const emoji = props.value >= 18 ? '' : '🔞';
    return (
        <TitleLi
            title="Age"
            text={emoji + props.value}
            isHidden={isHidden}
            onMouseEnter={function () {
                setIsHidden(false);
            }}
            onMouseLeave={function () {
                setIsHidden(true);
            }}
        />
    );
}

/**
 * The Age component is responsible to show/hide the age
 * hence, the state should likely be created in the Age component.
 */
