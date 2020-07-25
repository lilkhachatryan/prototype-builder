import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { HeaderSettingsWrapper } from "../../assets/styles/HeaderSettingsWrapper.style";
import UndoAndRedo from "./settings/undoAndRedo/UndoAndRedo";
import PanningMode from "./settings/panningMode/PanningMode";

const HeaderSettings = ({
    currentElement,
    handleRemove,
    handleUndoAndRedo,
    panningMode,
    handlePanningMode,
}) => {
    return (
        <HeaderSettingsWrapper>
            <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo} />
            <PanningMode
                panningMode={panningMode}
                handlePanningMode={handlePanningMode} />
            <button
                disabled={!Object.keys(currentElement).length > 0}
                className="btn btn-danger"
                onClick={() => handleRemove(currentElement)}
            ><FontAwesomeIcon icon={faTrashAlt} /></button>

        </HeaderSettingsWrapper>
    );
};

export default HeaderSettings;
