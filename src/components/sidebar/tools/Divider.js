import React from 'react';
import { fabric } from 'fabric';
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Divider = ({ handleAdd }) => {
    const handleClick = () => {
        const divider = new fabric.Line([0,0, 200,0], {
            top: 30,
            left: 30,
            width: 300,
            stroke: "#000000",
            strokeWidth: 4,
            strokeDashArray: [0, 0],
            // lockScalingY: true,
        });
        return handleAdd(divider);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <FontAwesomeIcon icon={['fa', 'code']} />
            <span>Divider</span>
        </SidebarItem>
    );
};


export default Divider;
