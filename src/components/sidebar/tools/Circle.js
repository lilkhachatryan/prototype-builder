import React from 'react';
import {fabric} from 'fabric';

const Circle = ({handleAdd}) => {
    const handleClick = () => {
        const circle = new fabric.Circle({
            top: 100,
            left: 100,
            radius: 30,
            fill: '#000000',
            stroke: '#000000',
            strokeWidth: 0
        });
        return handleAdd(circle);
    };
    return (
        <button className="btn btn-light" onClick={handleClick} >
            Circle
        </button>
    );
};


export default Circle;
