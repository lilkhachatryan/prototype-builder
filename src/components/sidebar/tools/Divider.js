import React from 'react';
import { fabric } from 'fabric';

const Divider = ({ handleAdd }) => {
    const handleClick = () => {
        const divider = new fabric.Line([0,0, 200,0], {
            top: 30,
            left: 30,
            width: 300,
            stroke: "#000000",
            strokeWidth: 4,
            strokeDashArray: [0, 0],
        });
        return handleAdd(divider);
    };
    return (
        <button className="btn btn-light" onClick={handleClick}>
            Divider
        </button>
    );
};


export default Divider;
