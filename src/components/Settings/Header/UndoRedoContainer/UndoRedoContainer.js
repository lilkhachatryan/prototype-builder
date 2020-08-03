import React from 'react';
import './UndoRedoContainer.scss';

const UndoRedoContainer = ({handleUndoAndRedo}) => {
    return (
        <>
            <button className='undoredoButton btn' onClick={ () => handleUndoAndRedo('undo') } >&#8634;</button>
            <button className='undoredoButton btn' onClick={() => handleUndoAndRedo('redo')} >&#8635;</button>
        </>
    );
};

export default UndoRedoContainer;
