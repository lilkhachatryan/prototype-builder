import React from 'react';

const PanningMode = ({handlePanningMode, panningMode}) => {
    return (
        <div>
            <button
                className="primary"
                style={ {color: (panningMode ? 'red' : '')} }
                onClick={handlePanningMode} >
                Panning Mode
            </button>
        </div>
    );
};

export default PanningMode;
