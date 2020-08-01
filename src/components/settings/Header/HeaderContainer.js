import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClone, faObjectGroup, faObjectUngroup, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import UndoAndRedo from './UndoRedoContainer/UndoRedoContainer';
import PanningModeButton from './PanningModeButton/PanningMode';
import SaveAs from './SaveAs/Save';
import './HeaderContainer.scss';

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
        <div className='header-container d-flex'>
            <div className='header-container__actionButtons d-flex align-items-center'>
                <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo}/>
                <PanningModeButton
                    panningMode={panningMode}
                    handlePanningMode={handlePanningMode}/>
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className='btn additional-btn ml-2'
                    onClick={handleClone}
                ><FontAwesomeIcon icon={faClone}/></button>
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className='btn additional-btn ml-3 mr-3'
                    onClick={handleObjectsGroup}
                ><FontAwesomeIcon icon={faObjectGroup}/></button>
                <button
                    disabled={!Object.keys(currentElement).length > 0}
                    className='btn additional-btn mr-2'
                    onClick={handleUnGroupObjects}
                ><FontAwesomeIcon icon={faObjectUngroup}/></button>
                <SaveAs handleSave={handleSave}/>
                <FontAwesomeIcon disabled={!Object.keys(currentElement).length > 0}
                                 className='btn fontAwesome__override'
                                 onClick={() => handleRemove(currentElement)} icon={faTrashAlt}/>
            </div>
        </div>
    );
};

export default HeaderContainer;
