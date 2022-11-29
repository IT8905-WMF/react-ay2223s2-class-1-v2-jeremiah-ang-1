import React from 'react';
export default function RPSButton(props) {
    const winCount = props.records.filter(function (record) {
        return record.result === 'Win';
    }).length;
    const totalCount = props.records.length;
    const winPercentage = ((winCount / totalCount) * 100).toFixed(2);
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <button
            onClick={function () {
                props.onButtonPressed(props.move);
            }}
            onMouseEnter={function () {
                setIsHovered(true);
            }}
            onMouseLeave={function () {
                setIsHovered(false);
            }}
        >
            {props.move} {isHovered && `(${totalCount === 0 ? 0 : winPercentage}%)`}
        </button>
    );
}
