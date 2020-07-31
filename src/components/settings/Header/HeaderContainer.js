import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClone, faObjectGroup, faObjectUngroup, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import UndoAndRedo from "./UndoRedoContainer/UndoRedoContainer";
import PanningModeButton from "./PanningModeButton/PanningMode";
import "./HeaderContainer.scss";
import SaveAs from "./SaveAs/Save";

const HeaderContainer = ({
                             currentElement,
                             handleRemove,
                             handleUndoAndRedo,
                             panningMode,
                             handlePanningMode,
                             handleClone,
                             handleObjectsGroup,
                             handleUnGroupObjects,
                             handleSave
}) => {
    return (
        <div className="header-container">
            <div className="header-container__actionButtons">
                <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo} />
                <PanningModeButton
                    panningMode={panningMode}
                    handlePanningMode={handlePanningMode} />
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className="btn btn-danger fontAwesome__override"
                    onClick={() => handleRemove(currentElement)}
                ><FontAwesomeIcon icon={faTrashAlt} /></button>

                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className="btn btn-outline-primary ml-3"
                    onClick={handleClone}
                ><FontAwesomeIcon icon={faClone}/></button>
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className="btn btn-outline-primary ml-3"
                    onClick={handleObjectsGroup}
                ><FontAwesomeIcon icon={faObjectGroup}/></button>
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className="btn btn-outline-primary ml-3"
                    onClick={handleUnGroupObjects}
                ><FontAwesomeIcon icon={faObjectUngroup}/></button>
                <SaveAs handleSave={handleSave} />
            </div>
        </div>
    );
};

export default HeaderContainer;
