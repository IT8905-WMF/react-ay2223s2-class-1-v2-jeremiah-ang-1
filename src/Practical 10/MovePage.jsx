import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TitleLi from '../Practical 5/TitleLi';

export default function MovePage(props) {
    const records = useSelector(function (state) {
        return state.record.value;
    });
    const params = useParams();
    return (
        <div>
            <ul>
                <TitleLi title="Move #" text={params.moveId}></TitleLi>
                <TitleLi title="Move" text={records[params.moveId - 1].move}></TitleLi>
                <TitleLi title="Result" text={records[params.moveId - 1].result}></TitleLi>
            </ul>
        </div>
    );
}
