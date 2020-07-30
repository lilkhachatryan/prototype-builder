import React from 'react';
const SaveAs = ({handleSave}) => {
    return (
        <div>
            <button onClick={ () => handleSave('png') } >
                save as png
            </button>
            <button onClick={ () => handleSave('json') } >
                save as json
            </button>
        </div>
    );
};

export default SaveAs;
