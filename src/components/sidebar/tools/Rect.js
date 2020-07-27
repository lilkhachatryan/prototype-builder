import React from 'react';
import { fabric } from 'fabric';
import { reduce } from 'lodash';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";
import {addCanvasObject} from "../../../actions/canvas";
import {connect} from "react-redux";
import createFabricObject from "../../../utils/fabricObject";

const Rect = ({ handleAdd }) => {
    const handleClick = () => {
        const rect = createFabricObject ('Rect', {
            top: 200,
            left: 100,
            width: 100,
            height: 50,
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 3,
            rx: 0,
            ry: 0
        }).toObject();

        handleAdd({ newObj: rect });
    };
    return (
        <SidebarItem onClick={handleClick}>
            <FontAwesomeIcon icon={['fa', 'code']} />
            <span>Rectangle</span>
        </SidebarItem>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (payload) => dispatch(addCanvasObject(payload))
    };
};

export default connect(null, mapDispatchToProps)(Rect);
