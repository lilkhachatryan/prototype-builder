import React from 'react';
import { fabric } from 'fabric';
import { v4 as uuid } from 'uuid';

import {SidebarItem} from "../../../assets/styles/SidebarItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TextBox = ({ handleAdd, fontSize, name }) => {
    const handleClick = () => {
        const textBox = new fabric.Textbox("Type your text here", {
            id: uuid(),
            top: 30,
            left: 75,
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
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
        });
        return handleAdd(textBox);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>{name}</span>
        </SidebarItem>
    );
};


export default TextBox;
