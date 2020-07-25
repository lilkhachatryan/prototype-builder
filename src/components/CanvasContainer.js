import React from 'react';
import { fabric } from 'fabric';
import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";
import 'fabric-history';

class CanvasContainer extends React.Component {


    state = {
        currentElement: {},
        panningMode: false,
        isPanning: false
    };

    deleteHandler = (event) => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        if (event.key === 'Delete' && Object.keys(this.state.currentElement).length > 0) {
            this.handleRemove(this.state.currentElement);
        }
    };

    componentDidMount() {
        this.canvas = new fabric.Canvas('canvas', {

        });
        this.canvas.on('selection:created', (event) => {

            this.setState({ currentElement: this.canvas.getActiveObject() });

        });
        this.canvas.on('selection:updated', (event) => {
            this.setState({ currentElement: this.canvas.getActiveObject() });
        });
        this.canvas.on('selection:cleared', (event) => {
            this.setState({ currentElement: {} });
        });
        this.handlePan();
        this.handleZoom();
        window.addEventListener("keydown", this.deleteHandler);
    };


    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.deleteHandler);
    };


    handleZoom = () => {
        const returnCanvas = () => this.canvas;
        this.canvas.on('mouse:wheel', function (opt) {
            let delta = opt.e.deltaY;
            let zoom = returnCanvas().getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.5) zoom = 0.5;
            returnCanvas().zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });
    };

    handlePan = () => {
        this.canvas.on('mouse:move', (event) => {
            if (this.state.panningMode) {
                this.canvas.setCursor('grab');
            }
            if (this.state.isPanning && this.state.panningMode) {
                this.canvas.setCursor('grab');
                const { e: { movementX, movementY } } = event;
                const delta = new fabric.Point(movementX, movementY);
                this.canvas.relativePan(delta);
            }
        });
        this.canvas.on('mouse:down', () => {
            if (this.state.panningMode) {
                this.canvas.forEachObject((o) => o.selectable = false);
                this.canvas.setCursor('grab');
                this.setState({
                    isPanning: true
                });
                this.canvas.selection = false;
            } else {
                this.canvas.selection = true;
                this.canvas.forEachObject((o) => o.selectable = true);
            }
        });
        this.canvas.on('mouse:up', () => {
            this.setState({
                isPanning: false
            });
        });
    };

    handleUndoAndRedo = (type) => {
        type === 'undo' ? this.canvas.undo() : this.canvas.redo();
    };
    handleAdd = (obj) => {
        this.canvas.add(obj);
    };
    handleRemove = (obj) => {
        this.canvas.remove(obj);
        this.setState({ currentElement: {} });
    };

    handlePanningMode = () => {
        this.setState({
            panningMode: !this.state.panningMode
        });
    };


    handleElementPropChange = (obj) => {
        console.log(obj);
        const newCurrentElement = this.canvas.getActiveObject();
        newCurrentElement.set({ ...obj });
        this.canvas.renderAll();
        this.setState({ currentElement: newCurrentElement });
    };


    handleBringToTop = () => {
        this.state.currentElement.bringToFront()
    }
    handleCenter = (type) => {
        if (type === 'H') {
            this.state.currentElement.centerH();
            this.state.currentElement.setCoords();
        } else if (type === 'V') {
            this.state.currentElement.centerV();
            this.state.currentElement.setCoords();
        }
    }

    render() {
        return (
            <div className="container">
                <SidebarContainer handleAdd={this.handleAdd} />


                <SettingsContainer
                    panningMode={this.state.panningMode}
                    handlePanningMode={this.handlePanningMode}
                    handleUndoAndRedo={this.handleUndoAndRedo}
                    currentElement={this.state.currentElement}
                    elementChange={this.handleElementPropChange}
                    handleRemove={this.handleRemove}
                    handleUndoAndRedo={this.handleUndoAndRedo}
                    bringToTop={this.handleBringToTop}
                    center={this.handleCenter}
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


