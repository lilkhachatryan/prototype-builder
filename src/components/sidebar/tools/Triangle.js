import React from 'react';
import { fabric } from 'fabric';

const Triangle = ({ handleAdd }) => {
    const handleClick = () => {
        const triangle = new fabric.Triangle({
            top: 200,
            left: 100,
            width: 50,
            height: 50,
            fill: 'transparent',
            stroke: '#000000',
            strokeWidth: 2,
        });
        return handleAdd(triangle);
    };
    return (
        <button className="btn btn-light" onClick={handleClick} >
            Triangle
        </button>
    );
};


export default Triangle;
