import React from 'react';
import { fabric } from 'fabric';
import 'fabric-history';

import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";
import HeaderSettings from "./settings/HeaderSettings";

import './CanvasContainer.scss';

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

    updateSelection = () => {
        this.setState({ currentElement: this.canvas.getActiveObject().toObject(['id']) })
    };
    removeSelection = () => {
        this.setState({currentElement: {}})
    };

    componentDidMount() {
        this.canvas = new fabric.Canvas('canvas', {
            backgroundColor: '#FFFFFF'
        });
        this.canvas.on('selection:created', this.updateSelection);
        this.canvas.on('selection:updated', this.updateSelection);
        this.canvas.on('selection:cleared', this.removeSelection);

        this.handlePan();
        this.handleZoom();
        window.addEventListener("keydown", this.deleteHandler);
    };


    componentWillUnmount = () => {
        this.canvas.off('selection:created', this.updateSelection);
        this.canvas.off('selection:updated', this.updateSelection);
        this.canvas.off('selection:cleared', this.removeSelection);

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
        const activeObj = this.canvas.getObjects().find(el => el.id === obj.id);
        console.log(activeObj)
        this.canvas.remove(activeObj);
        this.setState({ currentElement: {} });
    };

    handlePanningMode = () => {
        this.setState({
            panningMode: !this.state.panningMode
        });
    };


    handleElementPropChange = (obj) => {
        const newCurrentElement = this.canvas.getActiveObject();
        newCurrentElement.set({ ...obj });
        this.canvas.renderAll();
        console.log(newCurrentElement === this.state.currentElement);
        this.setState({ currentElement: newCurrentElement.toObject() });
    };


    handleBringToTop = () => {
        const activeObj = this.canvas.getActiveObject();
        activeObj.bringToFront();
    }
    handleCenter = (type) => {
        if (type === 'H') {
            const activeObj = this.canvas.getActiveObject();
            activeObj.centerH();
            activeObj.setCoords();
        } else if (type === 'V') {
            const activeObj = this.canvas.getActiveObject();
            activeObj.centerV();
            activeObj.setCoords();
        }
    }

    render() {
        return (
            <div className="workspaceWrapper">
                <SidebarContainer handleAdd={this.handleAdd} />

                <div className="mainContainer">
                    <HeaderSettings
                        panningMode={this.state.panningMode}
                        handlePanningMode={this.handlePanningMode}
                        handleUndoAndRedo={this.handleUndoAndRedo}
                        currentElement={this.state.currentElement}
                        handleRemove={this.handleRemove}
                        bringToTop={this.handleBringToTop}
                        center={this.handleCenter} />
                    <canvas
                        className='canvas'
                        height={500}
                        width={600}
                        id='canvas'>
                    </canvas>
                </div>

                <SettingsContainer
                    currentElement={this.state.currentElement}
                    elementChange={this.handleElementPropChange}
                    bringToTop={this.handleBringToTop}
                    center={this.handleCenter}
                />
            </div>
        );
    }
}

export default CanvasContainer;


