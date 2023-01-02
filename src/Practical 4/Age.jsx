import TitleLi from './TitleLi';

export default function Age(props) {
    const emoji = props.value >= 18 ? '' : '🔞';
    return <TitleLi title="Age" text={emoji + props.value} isHidden={true} />;
}
