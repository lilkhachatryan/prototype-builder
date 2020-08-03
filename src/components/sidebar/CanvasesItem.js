import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CanvasesItem = ({item, handleLoadCanvas, active, handleDeleteCanvasWithId, no}) => {
    return (
        <NavDropdown.Item className='existing-canvas-item d-flex align-items-center justify-content-between'>
            <li
                className={`${active ? 'text-danger' : ''}`}
                onClick={() => handleLoadCanvas(item)}>
                Canvas {no + 1}
            </li>
            <button onClick={() => handleDeleteCanvasWithId(item._id)} className='btn fontAwesome__override align-items-center'>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </NavDropdown.Item>
    );
};

export default CanvasesItem;
