import React from 'react';

import LineSettings from './settings/LineSettings/LineSettings';
import TextSettings from './settings/TextSettings/TextSettings';
import ShapeSettings from './settings/ShapeSettings/ShapeSettings';
import ButtonSettings from "./settings/ButtonSettings/ButtonSettings";
import _ from 'lodash';

import './Settings.scss';

class SettingsContainer extends React.Component {
    render() {
        const { currentElement, elementChange } = this.props;
        let groupTypes;
        let settings = null;
        if (currentElement.type === 'group') {
            groupTypes = currentElement._objects.map(obj => _.startCase(obj.type)).join('');
            if (groupTypes === 'RectText') {
                settings = <ButtonSettings elementChange={elementChange} currentElement={currentElement} />;
            }
        } else {
            if (currentElement.type === 'textbox') {
                settings = <TextSettings elementChange={elementChange} currentElement={currentElement}/>
            } else if (currentElement.type === 'rect'
                || currentElement.type === 'triangle'
                || currentElement.type === 'circle') {
                settings = <ShapeSettings elementChange={elementChange} currentElement={currentElement}/>
            }
            else if (currentElement.type === 'line') {
                settings = <LineSettings elementChange={elementChange} currentElement={currentElement}/>
            }
        }

        return (
            <div className="settingsWrapper">
                {settings ? settings : <h5>Please select element</h5>}
                {settings
                    ? <div className="objAlignBtns">
                        <button className="primary" onClick={this.props.bringToTop}>Bring forward</button>
                        <button className="primary" onClick={() => this.props.center('H')}>Center horizontally</button>
                        <button className="primary" onClick={() => this.props.center('V')}>Center vertically</button>
                    </div> : null}
            </div>
        );
    }
}


export default SettingsContainer;
