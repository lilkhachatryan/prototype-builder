import React from 'react';
import { fabric } from 'fabric';
import { reduce } from 'lodash';
import { v4 as uuid } from 'uuid';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";

const Rect = ({ handleAdd, panningPosition }) => {
    const handleClick = () => {
        const rect = new fabric.Rect({
            id: uuid(),
            top: -panningPosition.y + 20,
            left: -panningPosition.x + 75,
            width: 450,
            height: 50,
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 3,
            rx: 0,
            ry: 0,
            strokeUniform: true,
        });
        console.log(!!rect.getObjects)
        return handleAdd(rect);
    };
    return (
        <SidebarItem onClick={handleClick}>
            <span>Rectangle</span>
        </SidebarItem>
    );
};

const mapStateToProps = (state) => {
    return {
        coords: state.coords
    };
};


export default connect(mapStateToProps)(Rect);
