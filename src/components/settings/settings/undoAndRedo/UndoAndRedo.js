import React from 'react';

const UndoAndRedo = ({handleUndoAndRedo}) => {
    return (
        <div>
            <button onClick={ () => handleUndoAndRedo('undo') } >Undo</button>
            <button onClick={() => handleUndoAndRedo('redo')} >Redo</button>
        </div>
    );
};

export default UndoAndRedo;
