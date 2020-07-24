import React from 'react';
import TextSettings from './TextSettings/TextSettings';
import ShapeSettings from './ShapeSettings/ShapeSettings';

class SettingsContainer extends React.Component {
    render() {
        let settings = null;
        if (this.props.currentElement.type === 'textbox') {
            settings = <TextSettings elementChange={this.props.elementChange} currentElement={this.props.currentElement}/>
        } else if (this.props.currentElement.type === 'rect'
            || this.props.currentElement.type === 'triangle'
            || this.props.currentElement.type === 'circle') {
            settings = <ShapeSettings elementChange={this.props.elementChange} currentElement={this.props.currentElement}/>
        }

        return (
            <div>
                {settings}
            </div>
        );
    }
}

export default SettingsContainer;
