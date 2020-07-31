import React from 'react';
import './Save.css';

const SaveAs = ({handleSave}) => {
    return (
        <>
            <button className="saveButton" onClick={ () => handleSave('png') } >
                save as png
            </button>
            <button className="saveButton" onClick={ () => handleSave('json') } >
                save as json
            </button>
        </>
    );
};

export default SaveAs;
