import React from 'react';
import { fabric } from 'fabric';
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
            strokeUniform: true,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
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
