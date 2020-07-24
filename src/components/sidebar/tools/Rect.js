import React from 'react';
import {fabric} from 'fabric';

const Rect = ({handleAdd}) => {
    const handleClick = () => {
        const rect = new fabric.Rect({
            top: 200,
            left: 100,
            width: 40,
            height: 40,
            fill: 'blue',
        });
        return handleAdd(rect);
    };
    return (
        <button onClick={handleClick} >
            Add rect
        </button>
    );
};


export default Rect;
