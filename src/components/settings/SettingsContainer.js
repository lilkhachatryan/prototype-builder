import React from 'react';
import LineSettings from './settings/LineSettings/LineSettings';
import TextSettings from './settings/TextSettings/TextSettings';
import ShapeSettings from './settings/ShapeSettings/ShapeSettings';
import UndoAndRedo from "./settings/undoAndRedo/UndoAndRedo";

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
        else if (this.props.currentElement.type === 'line') {
            settings = <LineSettings elementChange={this.props.elementChange} currentElement={this.props.currentElement}/>
        }

        return (
            <div>
                Settings Container
                {settings}
                {Object.keys(this.props.currentElement).length > 0 
                    ? <button 
                        className="btn btn-danger" 
                        onClick={() => this.props.handleRemove(this.props.currentElement)}
                    >Delete</button> 
                    : null}
                    <UndoAndRedo handleUndoAndRedo={this.props.handleUndoAndRedo} />
            </div>
        );
    }
}

export default SettingsContainer;
