import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClone, faObjectGroup, faObjectUngroup, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import UndoAndRedo from './UndoRedoContainer/UndoRedoContainer';
import PanningModeButton from './PanningModeButton/PanningMode';
import SaveAs from './SaveAs/Save';
import './HeaderContainer.scss';
import './SaveAs/Save.scss';
import ConnectedCanvasesList from "../../sidebar/CanvasesList";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderContainer = ({
                             handleCreateNewCanvas,
                             currentElement,
                             handleRemove,
                             handleUndoAndRedo,
                             panningMode,
                             handlePanningMode,
                             handleClone,
                             handleObjectsGroup,
                             handleUnGroupObjects,
                             handleSave,
                             handleDeleteCanvasWithId,
                             currentlyEditingCanvasId,
                             handleLoadCanvas,
                         }) => {
    return (
        <div className='header-container d-flex'>
            <div className='header-container__actionButtons d-flex align-items-center'>
                <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo}/>
                <PanningModeButton
                    panningMode={panningMode}
                    handlePanningMode={handlePanningMode}/>
                <button disabled={_.isEmpty(currentElement)}
                        className='btn additional-btn ml-2'
                        onClick={handleClone}
                ><FontAwesomeIcon icon={faClone}/></button>
                <button
                    className='btn additional-btn ml-3 mr-3'
                    onClick={handleObjectsGroup}
                ><FontAwesomeIcon icon={faObjectGroup}/></button>
                <button
                    className='btn additional-btn mr-2'
                    onClick={handleUnGroupObjects}
                ><FontAwesomeIcon icon={faObjectUngroup}/></button>
                <SaveAs
                    handleSave={handleSave}/>
                <button disabled={_.isEmpty(currentElement)}
                        className='btn mr-2 fontAwesome__override'
                        onClick={() => handleRemove(currentElement)}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
                <button className='btn saveButton' onClick={handleCreateNewCanvas}>
                    Create New Canvas
                </button>
                <NavDropdown title={
                    <div>
                        <button className='btn saveButton'>
                            Existing canvases
                        </button>
                    </div>
                } id='existing-canvases'>
                        <ConnectedCanvasesList
                            handleDeleteCanvasWithId={handleDeleteCanvasWithId}
                            currentlyEditingCanvasId={currentlyEditingCanvasId}
                            handleLoadCanvas={handleLoadCanvas}
                        />
                </NavDropdown>
            </div>
        </div>
    );
};

export default HeaderContainer;
