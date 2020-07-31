import React from 'react';
import { fabric } from 'fabric';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarItem } from "../../../assets/styles/SidebarItem.style";


const Button = ({ handleAdd }) => {
    const defaultPadding = {
        top: 5,
        right: 25,
        bottom: 5,
        left: 25
    };

    const handleClick = () => {
        const text = new fabric.IText("Submit", {
            originX: 'center',
            originY: 'center',
            // fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: '#FFFFFF',
            strokeWidth: 0,
            stroke: '#000000'
        });

        let textWidth = Math.ceil(text.calcTextWidth());
        let textHeight = Math.ceil(text.calcTextHeight());
        let rectWidth = textWidth + defaultPadding.right + defaultPadding.right;
        let rectHeight = textHeight + defaultPadding.top + defaultPadding.bottom;

        const rect = new fabric.Rect({
            width: rectWidth,
            height: rectHeight,
            originX: 'center',
            originY: 'center',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 1,
            rx: 0,
            ry: 0,

            strokeUniform: true,
        });

/*        let button = new fabric.Group([rect, text], {
            type: 'button',
            left: -panningPosition.x + 100,
            top: -panningPosition.y + 100,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',

        });*/

       let button = new fabric.Group([rect, text], {
           left: 150,
           top: 100,
       });
       handleAdd(button);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Button</span>
        </SidebarItem>
    );
};

export default Button;
