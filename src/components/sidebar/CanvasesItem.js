import React from 'react';

const CanvasesItem = ({item, handleLoadCanvas, active, handleDeleteCanvasWithId}) => {
    return (
        <div>
            <li
                className={`${active ? 'text-danger' : ''}`}
                onClick={() => handleLoadCanvas(item)} >
                {item._id}
            </li>
            <button onClick={ () => handleDeleteCanvasWithId(item._id) } >
                Delete
            </button>
        </div>
    );
};

export default CanvasesItem;
