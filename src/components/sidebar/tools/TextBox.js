import React from 'react';
import { fabric } from 'fabric';
import { v4 as uuid } from 'uuid';

import {SidebarItem} from "../../../assets/styles/SidebarItem.style";

const TextBox = ({ handleAdd, fontSize, name, panningPosition }) => {
    const handleClick = () => {
        const textBox = new fabric.Textbox("Type your text here", {
            id: uuid(),
            top: -panningPosition.y + 30,
            left: -panningPosition.x + 50,
            width: 450,
            fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: fontSize,
            fontWeight: fontSize > 24 ? '600' : '400',
            fontStyle: 'normal',
            lineHeight: 1,
            strokeWidth: 0,
            stroke: '#000000',
            textAlign: 'left',
            textBackgroundColor: 'rgba(255,255,255,0)',
            // lockScalingY: true,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
        });
        textBox.setControlsVisibility({
            bl: true,
            br: true,
            mb: false,
            ml: true,
            mr: true,
            mt: false,
            tr: true,
            tl: true,
            mtr: true,
        })
        return handleAdd(textBox);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>{name}</span>
        </SidebarItem>
    );
};


export default TextBox;
