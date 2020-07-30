import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faClone, faObjectGroup, faObjectUngroup, faHandRock} from '@fortawesome/free-solid-svg-icons';

import UndoAndRedo from "./undoAndRedo/UndoAndRedo";
import SaveAs from "./Save";

const HeaderSettings = ({
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
        <div className="headerSettingsWrapper">
            <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo}/>
            <SaveAs handleSave={handleSave} />
            <button
                disabled={!Object.keys(currentElement).length > 0}
                className="btn btn-danger"
                onClick={() => handleRemove(currentElement)}
            ><FontAwesomeIcon icon={faTrashAlt}/></button>
            <button
                onClick={handlePanningMode}
                className={`${panningMode ? 'btn btn-primary' : 'btn btn-secondary'}`}>
                <FontAwesomeIcon
                    icon={faHandRock}/>
            </button>
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
        </div>
    );
};

export default HeaderSettings;
