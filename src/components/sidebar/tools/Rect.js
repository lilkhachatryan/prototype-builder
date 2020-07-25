import React from 'react';
import { fabric } from 'fabric';
import { reduce } from 'lodash';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";

const Rect = ({ handleAdd }) => {
    const handleClick = () => {
        const rect = new fabric.Rect({
            top: 200,
            left: 100,
            width: 100,
            height: 50,
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 3,
            rx: 0,
            ry: 0,
        });
        return handleAdd(rect);
    };
    return (
        <SidebarItem onClick={handleClick}>
            <FontAwesomeIcon icon={['fa', 'code']} />
            <span>Rectangle</span>
        </SidebarItem>
    );
};


export default Rect;
