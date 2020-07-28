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
        const { currentElement } = this.props;
        if (!currentElement) {
            return (<h5>Please select element</h5>);
        }

        let groupTypes;
        let settings = null;
        if (currentElement.type === 'group') {
            groupTypes = currentElement._objects.map(obj => _.startCase(obj.type)).join('');
            if (groupTypes === 'RectText') {
                settings = <ButtonSettings />;
            }
        } else {
            if (currentElement.type === 'textbox') {
                settings = <TextSettings />;
            } else if (['rect', 'triangle', 'circle'].indexOf(currentElement.type) > -1) {
                settings = <ShapeSettings />;
            }
            else if (currentElement.type === 'line') {
                settings = <LineSettings />;
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
        currentElement: state.canvas.selectedObject
    };
};

export default connect(mapStateToProps)(SettingsContainer);
