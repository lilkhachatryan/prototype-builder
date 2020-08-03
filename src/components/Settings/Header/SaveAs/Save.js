import './Save.scss';
import React from 'react';

const SaveAs = ({handleSave}) => {
    return (
        <>
            <button className="saveButton btn" onClick={ () => handleSave('png') } >
                Save as PNG
            </button>
            <button
                className="saveButton btn"
                onClick={ () => handleSave('json') } >
                Save
            </button>
        </>
    );
};

export default SaveAs;
