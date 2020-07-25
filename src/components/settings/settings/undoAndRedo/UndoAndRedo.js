import React from 'react';

const UndoAndRedo = ({handleUndoAndRedo}) => {
    return (
        <div>
            <button className="primary" onClick={ () => handleUndoAndRedo('undo') } >&#8634;</button>
            <button className="primary" onClick={() => handleUndoAndRedo('redo')} >&#8635;</button>
        </div>
    );
};

export default UndoAndRedo;
