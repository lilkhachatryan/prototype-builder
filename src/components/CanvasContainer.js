import React from 'react';
import { fabric } from 'fabric';
import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";

class CanvasContainer extends React.Component {
    state = {
        currentElement: {}
    };

    componentDidMount() {
        this.currentElement = {};
        this.canvas = new fabric.Canvas('canvas');
        this.canvas.on('selection:created', (event) => {
            this.setState({
                currentElement: event.target
            })
        });
        this.canvas.on('selection:updated', (event) => {
            this.setState({
                currentElement: event.target
            })
        });

    }
    handleAdd = (obj) => {
        this.canvas.add(obj);
    };

    handleElementPropChange = (prop, value) => {
        this.currentElement.set({ [prop]: value });
        this.canvas.renderAll();
        this.setState({currentElement: this.currentElement})
    };

    render() {
        this.currentElement = this.state.currentElement;
        return (
            <div>
                <SidebarContainer handleAdd={this.handleAdd} />
                <SettingsContainer
                    currentElement={this.currentElement}
                    elementChange={this.handleElementPropChange}
                />
                <canvas
                    className='canvas'
                    height={500}
                    width={600}
                    id='canvas'>
                </canvas>
            </div>
        );
    }
}

export default CanvasContainer;
