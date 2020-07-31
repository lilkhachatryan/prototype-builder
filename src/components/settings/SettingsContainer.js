import React from 'react';

import CanvasSettings from './CanvasSettings';
import ImageSettings from './ImageSettings';
import LineSettings from './LineSettings/LineSettings';
import TextSettings from './TextSettings/TextSettings';
import ShapeSettings from './ShapeSettings/ShapeSettings';
import ButtonSettings from "./ButtonSettings/ButtonSettings";
import ShareIconsSettings from "./ShareIconsSettings";
import './Settings.scss';

export const Settings = Object.freeze({
    image: ImageSettings,
    button: ButtonSettings,
    textbox: TextSettings,
    rect: ShapeSettings,
    circle: ShapeSettings,
    triangle: ShapeSettings,
    line: LineSettings,
    shareIcons: ShareIconsSettings
});

class SettingsContainer extends React.Component {
    render() {
        const { currentElement, elementChange, groupElementChange } = this.props;
        let SettingsComponent = Settings[currentElement.type];

        if (!SettingsComponent) {
            return (
                <div className="settingsWrapper">
                    <CanvasSettings canvas={this.props.canvas} changeCanvasBg={this.props.changeCanvasBg}/>
                </div>
            );
        }

        return (
            <div className="settingsWrapper">
                <SettingsComponent
                    elementChange={elementChange}
                    currentElement={currentElement}
                    groupElementChange={groupElementChange} />
                <div className="objAlignBtns">
                    <button className="primary" onClick={this.props.bringToTop}>Bring forward</button>
                    <button className="primary" onClick={this.props.sendToBack}>Send back</button>
                    <button className="primary" onClick={() => this.props.center('H')}>Center horizontally</button>
                    <button className="primary" onClick={() => this.props.center('V')}>Center vertically</button>
                </div>
            </div>
        );
    }
}


export default SettingsContainer;
