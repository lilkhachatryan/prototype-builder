import React from 'react';
import { fabric } from 'fabric';
import { v4 as uuid } from 'uuid';

import {SidebarItem} from "../../../assets/styles/SidebarItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Divider = ({ handleAdd, panningPosition }) => {
    const handleClick = () => {
        const divider = new fabric.Line([0,0, 500,0], {
            id: uuid(),
            top: -panningPosition.y + 30,
            left: -panningPosition.x + 50,
            width: 500,
            stroke: "#000000",
            strokeWidth: 3,
            strokeDashArray: [0, 0],
            // lockScalingY: true,
            strokeUniform: true
        });
        return handleAdd(divider);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Divider</span>
        </SidebarItem>
    );
};


export default Divider;
