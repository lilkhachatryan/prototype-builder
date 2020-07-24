import React from 'react';
import { fabric } from 'fabric';
import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";

class CanvasContainer extends React.Component {


    state = {
        currentElement: {},
    }

    componentDidMount() {
        this.currentElement = {};
        this.canvas = new fabric.Canvas('canvas');
        this.canvas.on('selection:created', (event) => {
            this.currentElement = event.target;
            this.setState({currentElement: event.target})
        });
        this.handleZoom();
        this.canvas.on('selection:updated', (event) => {
            this.currentElement = event.target;
            this.setState({currentElement: event.target})
        });

        window.addEventListener("keydown", event => {
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.key === 'Delete' && Object.keys(this.state.currentElement).length > 1) {
                this.handleRemove(this.state.currentElement)
            }
          });
    }


    handleZoom = () => {
        const returnCanvas = () => this.canvas;
        this.canvas.on('mouse:wheel', function(opt) {
            let delta = opt.e.deltaY;
            let zoom = returnCanvas().getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            returnCanvas().zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });
    handleAdd = (obj) => {
        this.canvas.add(obj);
    };
    handleRemove = (obj) => {
        this.canvas.remove(obj);
        this.setState({currentElement: {}})
    };

    handleElementPropChange = (prop, value) => {
        this.currentElement.set({ [prop]: value });
        this.canvas.renderAll();
    };

    render() {
        return (
            <div className="container">
                <SidebarContainer handleAdd={this.handleAdd}/>

                <SettingsContainer
                    currentElement={this.state.currentElement}
                    elementChange={this.handleElementPropChange}
                    handleRemove={this.handleRemove}
                />
                <canvas
                    className='canvas'
                    height={500}
                    width={700}
                    id='canvas'>
                </canvas>
            </div>
        );
    }
}

export default CanvasContainer;
