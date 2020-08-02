import './Save.scss';
import React from 'react';

const SaveAs = ({handleSave, disabled}) => {
    return (
        <>
            <button className="saveButton btn" onClick={ () => handleSave('png') } >
                Save as PNG
            </button>
            <button
                disabled={disabled}
                className="saveButton btn"
                onClick={ () => handleSave('json') } >
                Save as JSON
            </button>
        </>
    );
};

export default SaveAs;
