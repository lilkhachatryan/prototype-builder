import React from 'react';
import { SettingsWrapper } from "../../assets/styles/SettingsWrapper.style";
import LineSettings from './settings/LineSettings/LineSettings';
import TextSettings from './settings/TextSettings/TextSettings';
import ShapeSettings from './settings/ShapeSettings/ShapeSettings';
import ButtonSettings from "./settings/ButtonSettings/ButtonSettings";
import _ from 'lodash';
import {connect} from "react-redux";

class SettingsContainer extends React.Component {
    render() {
        const { canvasObject, selectedObjectId } = this.props.canvas;
        if (!selectedObjectId) {
            return (<h5>Please select element</h5>);
        }

        const currentElement = canvasObject.objects.find(obj => obj.id === selectedObjectId);
        console.log('currentElement', currentElement);

        let groupTypes;
        let settings = null;
        if (currentElement.type === 'group') {
            // groupTypes = currentElement._objects.map(obj => _.startCase(obj.type)).join('');
            // if (groupTypes === 'RectText') {
            //     settings = <ButtonSettings elementChange={elementChange} currentElement={currentElement} />;
            // }
        } else {
            if (currentElement.type === 'textbox') {
                // settings = <TextSettings elementChange={elementChange} currentElement={currentElement}/>
            } else if (currentElement.type === 'rect'
                || currentElement.type === 'triangle'
                || currentElement.type === 'circle') {
                settings = <ShapeSettings currentElement={currentElement} />;
            }
            else if (currentElement.type === 'line') {
                // settings = <LineSettings elementChange={elementChange} currentElement={currentElement}/>
            }
        }

        return (
            <SettingsWrapper>
                {settings ? settings : <h5>Please select element</h5>}
            </SettingsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        canvas: state.canvas
    };
};

export default connect(mapStateToProps)(SettingsContainer);
