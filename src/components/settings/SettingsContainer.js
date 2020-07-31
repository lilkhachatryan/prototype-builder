import React from 'react';

import CanvasSettings from './CanvasSettings';
import ImageSettings from './ImageSettings';
import LineSettings from './LineSettings/LineSettings';
import TextSettings from './TextSettings/TextSettings';
import ShapeSettings from './ShapeSettings/ShapeSettings';
import ButtonSettings from "./ButtonSettings/ButtonSettings";
import ShareIconsSettings from "./ShareIconsSettings";
<<<<<<< HEAD
import './Settings.scss';
=======
import './SettingsContainer.scss';

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
>>>>>>> 682e94c0298e440f3a2410dc62b23a4e763f0d3f

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
<<<<<<< HEAD
                <div className="settingsWrapper">
=======
                <div className="settingsContainer">
>>>>>>> 682e94c0298e440f3a2410dc62b23a4e763f0d3f
                    <CanvasSettings canvas={this.props.canvas} changeCanvasBg={this.props.changeCanvasBg}/>
                </div>
            );
        }

        return (
<<<<<<< HEAD
            <div className="settingsWrapper">
=======
            <div className="settingsContainer">
>>>>>>> 682e94c0298e440f3a2410dc62b23a4e763f0d3f
                <SettingsComponent
                    elementChange={elementChange}
                    currentElement={currentElement}
                    groupElementChange={groupElementChange} />
                <div className="objAlignBtns">
<<<<<<< HEAD
                    <button className="primary" onClick={this.props.bringToTop}>Bring forward</button>
                    <button className="primary" onClick={this.props.sendToBack}>Send back</button>
                    <button className="primary" onClick={() => this.props.center('H')}>Center horizontally</button>
                    <button className="primary" onClick={() => this.props.center('V')}>Center vertically</button>
=======
                    <button className="settingsButton" onClick={this.props.bringToTop}>Bring forward</button>
                    <button className="settingsButton" onClick={() => this.props.center('H')}>Center horizontally</button>
                    <button className="settingsButton" onClick={() => this.props.center('V')}>Center vertically</button>
>>>>>>> 682e94c0298e440f3a2410dc62b23a4e763f0d3f
                </div>
            </div>
        );
    }
}


export default SettingsContainer;
