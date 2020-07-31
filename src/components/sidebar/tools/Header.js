import React from 'react';
import { fabric } from 'fabric';

import { SidebarItem } from "../../../assets/styles/SidebarItem.style";


const Header = ({ handleAdd, panningPosition }) => {
    const defaultPadding = {
        top: 10,
        right: 25,
        bottom: 10,
        left: 25
    };

    const handleClick = () => {
        const logo = new fabric.Textbox("Logo", {
            originX: 'left',
            originY: 'center',
            fill: "#000000",
            fontFamily: 'Coming Soon',
            fontSize: 20,
            fontWeight: '600',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: 'transparent',
            strokeWidth: 0,
            stroke: '#000000',
            selectable: true,
            left: 20
        });

        const menu = new fabric.Textbox("Workspace    About    Contact Us", {
            originX: 'left',
            originY: 'center',
            fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: 16,
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: 'transparent',
            strokeWidth: 0,
            stroke: '#000000',
            selectable: true,
            left: 390,
            width: 200
        });

        let textWidth = Math.ceil(logo.calcTextWidth());
        let textHeight = Math.ceil(logo.calcTextHeight());
        let rectWidth = textWidth + defaultPadding.right + defaultPadding.right;
        let rectHeight = textHeight + defaultPadding.top + defaultPadding.bottom;

        const rect = new fabric.Rect({
            width: 600,
            height: rectHeight,
            originX: 'left',
            originY: 'center',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 0,
            rx: 0,
            ry: 0,
            strokeUniform: true,
            shadow: '0px 0px 5px rgba(0,0,0,0.2)'
        });

        let header = new fabric.Group([rect, logo, menu], {
            left: -panningPosition.x,
            top: -panningPosition.y,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
        });
        handleAdd(header);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Header</span>
        </SidebarItem>
    );
};

export default Header;
