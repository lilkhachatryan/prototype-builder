import React from 'react';
import { fabric } from 'fabric';
import { SidebarItem } from "../../../assets/styles/SidebarItem.style";


const Button = ({ handleAdd, panningPosition }) => {
    const handleClick = () => {
        const text = new fabric.Text("Email", {
            // originX: 'center',
            originY: 'center',
            fill: "#aaaaaa",
            fontFamily: 'Times New Roman',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: 'transparent',
            strokeWidth: 0,
            stroke: '#000000',
            // top: 15,
            left: 15,
            width: 200
        });

        // let textWidth = Math.ceil(text.calcTextWidth());
        let textHeight = Math.ceil(text.calcTextHeight());

        const rect = new fabric.Rect({
            width: 200,
            height: textHeight + 14,
            // originX: 'center',
            originY: 'center',
            fill: '#FFFFFF',
            stroke: '#333333',
            strokeWidth: 1,
            rx: 5,
            ry: 5,
            strokeUniform: true,
            top: 0,
            left: 0,
        });

        let button = new fabric.Group([rect, text], {
            originX: 'center',
            originY: 'center',
            type: 'input',
            left: -panningPosition.x + 150,
            top: -panningPosition.y + 100,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
            width: 200,
        });
        handleAdd(button);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Input</span>
        </SidebarItem>
    );
};

export default Button;
