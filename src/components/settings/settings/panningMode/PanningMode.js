import React from 'react';

const PanningMode = ({handlePanningMode, panningMode}) => {
    return (
        <div>
            <button
                style={ {color: (panningMode ? 'red' : '')} }
                onClick={handlePanningMode} >
                PanningModeToggle
            </button>
        </div>
    );
};

export default PanningMode;
