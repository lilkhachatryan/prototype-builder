import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import UndoAndRedo from "./undoAndRedo/UndoAndRedo";
import PanningMode from "./panningMode/PanningMode";

const HeaderSettings = ({
    currentElement,
    handleRemove,
    handleUndoAndRedo,
    panningMode,
    handlePanningMode,
}) => {
    return (
        <div className="headerSettingsWrapper">
            <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo} />
            <PanningMode
                panningMode={panningMode}
                handlePanningMode={handlePanningMode} />
            <button
                disabled={!Object.keys(currentElement).length > 0}
                className="btn btn-danger"
                onClick={() => handleRemove(currentElement)}
            ><FontAwesomeIcon icon={faTrashAlt} /></button>

        </div>
    );
};

export default HeaderSettings;
