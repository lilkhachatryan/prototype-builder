import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import PanningMode from './panningMode/PanningMode'
import UndoAndRedo from "./undoAndRedo/UndoAndRedo";
import SaveAs from "./Save";


const HeaderSettings = ({
                            handleSave,
                            currentElement,
                            handleRemove,
                            handleUndoAndRedo,
                            panningMode,
                            handlePanningMode,

                        }) => {
    return (
        <div className="headerSettingsWrapper">
            <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo}/>
            <PanningMode
                panningMode={panningMode}
                handlePanningMode={handlePanningMode}/>
            <SaveAs handleSave={handleSave}/>
            <button
                disabled={!Object.keys(currentElement).length > 0}
                className="btn btn-danger"
                onClick={() => handleRemove(currentElement)}
            ><FontAwesomeIcon icon={faTrashAlt}/></button>

        </div>
    );
};

export default HeaderSettings;
