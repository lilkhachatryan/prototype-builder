import React from 'react';
import {fabric} from 'fabric';
import { v4 as uuid } from 'uuid';
import {connect} from 'react-redux';

import {SidebarItem} from "../../../assets/styles/SidebarItem.style";

const Circle = ({handleAdd, coords}) => {
    const handleClick = () => {
        const circle = new fabric.Circle({
            id: uuid(),
            ...coords,
            radius: 30,
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 2,
            strokeUniform: true,
        });
        return handleAdd(circle);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Circle</span>
        </SidebarItem>
    );
};

const mapStateToProps = state => {
    return {
        coords: state.coords
    };
};


export default connect(mapStateToProps)(Circle);
