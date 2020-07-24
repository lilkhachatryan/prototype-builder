import React from 'react';
import {fabric} from 'fabric';

const Rect = ({handleAdd}) => {
    return (
        <button onClick={() => {
            const obj = new fabric.Rect({
                top: 200,
                left: 100,
                width: 40,
                height: 40,
                fill: 'blue',
            });
            return handleAdd(obj);
        }}>
            Add Rect
        </button>
    );
};


export default Rect;
