import React from 'react';
import {SidebarItem} from "../../../assets/styles/SidebarItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { addCanvasObject } from "../../../actions/canvas";
import createFabricObject from "../../../utils/fabricObject";

const Circle = ({ handleAdd }) => {
    const handleClick = () => {
        // const circle = new fabric.Circle({
        //     top: 100,
        //     left: 100,
        //     radius: 30,
        //     fill: '#FFFFFF',
        //     stroke: '#000000',
        //     strokeWidth: 2,
        // });
        const circle = createFabricObject ('Circle', {
            top: 100,
            left: 100,
            radius: 30,
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 2
        }).toObject();
        console.log('circle', circle);
        handleAdd({ newObj: circle });
    };

    return (
        <SidebarItem onClick={handleClick}>
            <FontAwesomeIcon icon={['fa', 'code']} />
            <span>Circle</span>
        </SidebarItem>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (payload) => dispatch(addCanvasObject(payload))
    };
};

export default connect(null, mapDispatchToProps)(Circle);
