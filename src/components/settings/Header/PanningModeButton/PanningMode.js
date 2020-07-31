import React from 'react';
import "./PanningMode.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandRock} from "@fortawesome/free-solid-svg-icons";

const PanningModeButton = ({handlePanningMode, panningMode}) => {
    return (
            <button className="panningButton"
                    disabled={!panningMode}
                    onClick={handlePanningMode} >
                <FontAwesomeIcon
                    icon={faHandRock}/>
            </button>
    );
};

export default PanningModeButton;
