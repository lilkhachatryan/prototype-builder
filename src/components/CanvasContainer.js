import React from 'react';
import { fabric } from 'fabric';
import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";
import HeaderSettings from "./settings/HeaderSettings";
import { WorkspaceWrapper } from "../assets/styles/WorkspaceWrapper.style";
import { MainContainer } from "../assets/styles/MainContainer.style";
import { connect } from "react-redux";
import { setCurrentElement } from "../actions/canvas";
import 'fabric-history';
import _ from 'lodash';
import createFabricObject from '../utils/fabricObject';

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
        // if (event.key === 'Delete' && Object.keys(this.state.currentElement).length > 0) {
        //     this.handleRemove(this.state.currentElement);
        // }
    };

    componentDidMount() {
        this.canvas = new fabric.Canvas('canvas', {});

        this.loadAndRender();

        this.canvas.on('selection:created', (event) => {
            this.handleCanvasChane();
        });
        this.canvas.on('selection:updated', (event) => {
            this.handleCanvasChane();
        });
        this.canvas.on('selection:cleared', (event) => {
            this.handleCanvasChane();
        });
        this.handlePan();
        this.handleZoom();
        window.addEventListener("keydown", this.deleteHandler);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('is', !_.isEqual(prevProps.currentElementObject, this.props.currentElementObject));
        if (!_.isEqual(prevProps.currentElementObject, this.props.currentElementObject)){
            this.loadAndRender();
        }
    }


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
        this.props.setCurrentElement({ selectedObject: {} });
    };

    handlePanningMode = () => {
        this.setState({
            panningMode: !this.state.panningMode
        });
    };


    handleBringToTop = () => {
        // this.state.currentElement.bringToFront();
    };

    handleCenter = (type) => {
        if (type === 'H') {
            // this.state.currentElement.centerH();
            // this.state.currentElement.setCoords();
        } else if (type === 'V') {
            // this.state.currentElement.centerV();
            // this.state.currentElement.setCoords();
        }
    };

    handleCanvasChane = () => {
        let payload = {
            selectedObject: this.canvas.getActiveObject() ? this.canvas.getActiveObject().toObject() : null
        };
        this.props.setCurrentElement(payload);
    };

    handleElementPropChange = (inputs, item) => {
        const newCurrentElement = this.canvas.getActiveObject();
        if (newCurrentElement.type === 'group') {
            item.set({...inputs});
            this.canvas.renderAll();
        } else {
            newCurrentElement.set({ ...inputs });
            this.canvas.renderAll();
            this.setState({ currentElement: newCurrentElement });
        }
    };

    loadAndRender = () => {
        let { currentElementObject } = this.props;

        if (currentElementObject) {
            // TODO find better solution
            let currentElement = this.canvas.getObjects().find(obj => obj.id === currentElementObject.id);
            // let currentElement = createFabricObject(_.startCase(currentElementObject.type), { ...currentElementObject });
            if (currentElement.type === 'group') {
                //TODO maybe will be resolved with custom created class or with above solution
                // currentElement.item(?).set({...currentElementObject});
            } else {
                currentElement.set({ ...currentElementObject });
            }
            this.canvas.setActiveObject(currentElement);
        }
        this.canvas.renderAll();
    };

    render() {
        return (
            <WorkspaceWrapper>
                <SidebarContainer handleAdd={this.handleAdd} />

                <MainContainer>
                    <HeaderSettings
                        panningMode={this.state.panningMode}
                        handlePanningMode={this.handlePanningMode}
                        handleUndoAndRedo={this.handleUndoAndRedo}
                        handleRemove={this.handleRemove}
                        bringToTop={this.handleBringToTop}
                        center={this.handleCenter} />
                    <canvas
                        className='canvas'
                        height={500}
                        width={600}
                        id='canvas'>
                    </canvas>
                </MainContainer>

                <SettingsContainer />
            </WorkspaceWrapper>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        currentElementObject: state.canvas.selectedObject,
        canvas: state.canvas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentElement: (payload) => dispatch(setCurrentElement(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);


