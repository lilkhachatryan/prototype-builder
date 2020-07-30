import React from 'react';
import { fabric } from 'fabric';

import { SidebarItem } from "../../../assets/styles/SidebarItem.style";
import { facebook, twitter, linkedIn } from './ShareIcons';

const Footer = ({ handleAdd, panningPosition }) => {
    const defaultPadding = {
        top: 10,
        right: 25,
        bottom: 10,
        left: 25
    };

    const handleClick = () => {
        const logo = new fabric.Text("Logo", {
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

        const menu = new fabric.Text(`Home     About     Contact Us`,
            {
                originX: 'left',
                originY: 'center',
                fill: "#000000",
                fontFamily: 'Times New Roman',
                fontSize: 14,
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: 1,
                textBackgroundColor: 'transparent',
                strokeWidth: 0,
                stroke: '#000000',
                selectable: true,
                left: 20,
                top: 60,
            });

        let textWidth = Math.ceil(logo.calcTextWidth());
        let textHeight = Math.ceil(logo.calcTextHeight());
        let rectWidth = textWidth + defaultPadding.right + defaultPadding.right;
        let rectHeight = textHeight + defaultPadding.top + defaultPadding.bottom;


        facebook.set({ left: 0, fill: '#3b5998' });

        twitter.set({ left: 35, fill: '#00acee' });

        linkedIn.set({ left: 80, fill: '#0e76a8' });
        const rect = new fabric.Rect({
            width: 600,
            // height: rectHeight,
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
        let shareIcons = new fabric.Group([facebook, twitter, linkedIn], {
            // left: -panningPosition.x + 100,
            // top: -panningPosition.y + 100,
            originX: 'left',
            originY: 'center',
            type: 'shareIcons',
            left: 400,
            top: 0,
            fillName: '',
            colors: '',
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
        });

        const contact = new fabric.Text(`Phone: (001) 123-456-789
Email: placeholder@email.com`, {
            originX: 'left',
            originY: 'center',
            fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textAlign: 'left',
            lineHeight: 1,
            textBackgroundColor: 'transparent',
            strokeWidth: 0,
            stroke: '#000000',
            selectable: true,
            left: 400,
            top: 50,
        });

        const copyright = new fabric.Text(`Copyright: All right reserved 2020`,
            {
                originX: 'left',
                originY: 'center',
                fill: "#000000",
                fontFamily: 'Times New Roman',
                fontSize: 12,
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: 1,
                textBackgroundColor: 'transparent',
                strokeWidth: 0,
                stroke: '#000000',
                selectable: true,
                top: 100,
                left: 200
            });


        let header = new fabric.Group([rect, logo, menu, shareIcons, contact, copyright], {
            left: -panningPosition.x,
            top: -panningPosition.y + 360,
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
            <span>Footer</span>
        </SidebarItem>
    );
};

export default Footer;
