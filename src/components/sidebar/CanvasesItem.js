import React from 'react';

const CanvasesItem = ({item, handleLoadCanvas, active}) => {
    return (
        <div>
            <li
                className={`${active ? 'text-danger' : ''}`}
                onClick={() => handleLoadCanvas(item)} >
                {item._id}
            </li>
        </div>
    );
};

export default CanvasesItem;
