import React from 'react';
import './PanningMode.scss';
import {faHandRock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PanningModeButton = ({handlePanningMode, panningMode}) => {
    return (
            <button className={`${panningMode ? 'panningButton' : 'panningButton active'}`}
                    onClick={handlePanningMode} >
                <FontAwesomeIcon
                    icon={faHandRock}/>
            </button>
    );
};

export default PanningModeButton;
