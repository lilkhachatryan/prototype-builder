import React from 'react';

import CanvasSettings from './CanvasSettings';
import ImageSettings from './ImageSettings';
import LineSettings from './LineSettings/LineSettings';
import TextSettings from './TextSettings/TextSettings';
import ShapeSettings from './ShapeSettings/ShapeSettings';
import ButtonSettings from "./ButtonSettings/ButtonSettings";
import ShareIconsSettings from "./settings/ShareIconsSettings";

import _ from 'lodash';

import './Settings.scss';

class SettingsContainer extends React.Component {
    render() {
        console.log(this.props)
        const { currentElement, elementChange, groupElementChange } = this.props;
        let groupTypes;
        let settings = null;
        if (currentElement.type === 'group') {
            groupTypes = currentElement.objects.map(obj => _.startCase(obj.type)).join('');
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
            } else if (currentElement.type === 'shareIcons') {
                settings = <ShareIconsSettings groupElementChange={groupElementChange} currentElement={currentElement}/>
            } else if (currentElement.type === 'image') {
                settings = <ImageSettings elementChange={elementChange} currentElement={currentElement}/>
            }
        }

        return (
            <div className="settingsWrapper">
                {settings ? settings : <CanvasSettings canvas={this.props.canvas} changeCanvasBg={this.props.changeCanvasBg}/>}
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
