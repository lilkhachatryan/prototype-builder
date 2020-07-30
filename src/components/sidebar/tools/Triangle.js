import React from 'react';
import { fabric } from 'fabric';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";

const Triangle = ({ handleAdd, panningPosition }) => {
    const handleClick = () => {
        const triangle = new fabric.Triangle({
            top: -panningPosition.y + 100,
            left: -panningPosition.x + 100,
            width: 50,
            height: 50,
            fill: 'transparent',
            stroke: '#000000',
            strokeWidth: 1,
            strokeUniform: true
        });
        return handleAdd(triangle);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Triangle</span>
        </SidebarItem>
    );
};


export default Triangle;
