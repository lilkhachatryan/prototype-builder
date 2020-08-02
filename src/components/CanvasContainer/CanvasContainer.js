import React from 'react';
import {fabric} from 'fabric';
import 'fabric-history';
import {connect} from 'react-redux';
import saveAs from 'file-saver';
import {changeDpiDataUrl} from "changedpi/src";

import SidebarContainer from "../sidebar/SidebarContainer";
import SettingsContainer from "../settings/SettingsContainer";
import HeaderContainer from "../settings/Header/HeaderContainer";
import './CanvasContainer.scss';
import initAligningGuidelines from "../../utils/fabric/aligning_guidelines";
import initCenteringGuidelines from "../../utils/fabric/centering_guidelines";
import * as actions from '../../actions/canvasActions';
import Footer from "../Layout/Footer/Footer";
import {notifyInfo, notifyWarning} from "../../utils/notify";
import {CanvasNotifyTime} from "../../utils/notify";


class CanvasContainer extends React.Component {
    state = {
        currentlyEditingCanvasId: '',
        panningMode: false,
        isPanning: false,
        sendCoords: false,
        canvasSize: {
            height: 500,
            width: 650
        },
        isDesktopView: false,
    };

    deleteHandler = (event) => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        if (event.key === 'Delete' && Object.keys(this.props.currentElement).length > 0) {
            this.handleRemove();
        }
    };

    updateSelection = () => {
        return this.props.onCurrentObjectUpdate(this.canvas.getActiveObject().toObject(['id', 'colors', 'fillName', 'customType']));
    };

    removeSelection = () => {
        return this.props.onCurrentObjectUpdate({});
    };

    handleSave = (type) => {
        if (!this.canvas.isEmpty()) {
            if (this.state.currentlyEditingCanvasId) {
                this.handleEdit(this.state.currentlyEditingCanvasId);
            } else if (!this.state.currentlyEditingCanvasId) {
                if (type === 'png') {
                    let urlData = this.canvas.toDataURL({format: 'png', multiplier: 4});
                    let changedDpi = changeDpiDataUrl(urlData, 5000);
                    saveAs(changedDpi);
                } else {
                    this.createNewCanvas();
                }
            }
        } else {
            notifyWarning('The canvas is empty!', 'Canvas', CanvasNotifyTime);
        }
    };

    componentDidMount() {
        if (!this.state.isDesktopView) {
            this.setState({
                canvasSize: {
                    height: 600,
                    width: 700
                }
            });
        }
        this.canvas = new fabric.Canvas('canvas', {
            backgroundColor: '#FFFFFF',
            preserveObjectStacking: true,
            hoverCursor: 'pointer',
            // selection: true,
            // selectionBorderColor: 'green',
        });
        initAligningGuidelines(this.canvas);
        initCenteringGuidelines(this.canvas);

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
            if (zoom > 5) zoom = 5;
            if (zoom < 0.5) zoom = 0.5;
            returnCanvas().zoomToPoint(returnCanvas().getVpCenter(), zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });
    };

    handlePan = () => {
        let move = {x: 0, y: 0};
        this.canvas.on('mouse:move', (event) => {
            if (this.state.panningMode) {
                this.canvas.setCursor('grab');
            }
            if (this.state.isPanning && this.state.panningMode) {
                this.canvas.setCursor('grab');
                const {e: {movementX, movementY}} = event;
                const delta = new fabric.Point(movementX, movementY);
                this.canvas.relativePan(delta);
                move.x += movementX;
                move.y += movementY;
            }
        });
        this.canvas.on('mouse:down', (event) => {
            if (this.state.panningMode) {
                this.canvas.forEachObject((o) => o.selectable = false);
                this.canvas.setCursor('grab');
                this.setState({
                    isPanning: true,
                    sendCoords: true
                });
                this.canvas.selection = false;
            } else {
                this.canvas.selection = true;
                this.canvas.forEachObject((o) => o.selectable = true);
            }
        });

        this.canvas.on('mouse:up', () => {
            this.props.onUpdatePanningPosition(move);
            this.setState({
                isPanning: false,
            });
        });
    };
    handleUndoAndRedo = (type) => {
        type === 'undo' ? this.canvas.undo() : this.canvas.redo();
    };

    handleAdd = (obj) => {
        this.canvas.add(obj);
    };

    handleRemove = () => {
        this.props.onDeleteObject(this.canvas, this.props.currentElement);
    };

    handleClone = () => {
        let activeObject = this.canvas.getActiveObject();
        activeObject.clone((cloned) => {
            this.canvas.discardActiveObject();
            cloned.set({
                top: cloned.top + 20,
                evented: true
            });
            if (cloned.type === 'activeSelection') {
                cloned.canvas = this.canvas;
                cloned.forEachObject((obj) => {
                    this.canvas.add(obj);
                });
                cloned.setCoords();
            } else {
                this.canvas.add(cloned);
            }
            this.canvas.setActiveObject(cloned);
            this.canvas.requestRenderAll();
        });
    };

    handleObjectsGroup = () => {
        if (!this.canvas.getActiveObject()) {
            return;
        }
        if (this.canvas.getActiveObject().type !== 'activeSelection') {
            return;
        }
        this.canvas.getActiveObject().toGroup();
        this.canvas.requestRenderAll();
    };

    handleUnGroupObjects = () => {
        if (!this.canvas.getActiveObject()) {
            return;
        }
        if (this.canvas.getActiveObject().type !== 'group') {
            return;
        }
        this.canvas.getActiveObject().toActiveSelection();
        this.canvas.requestRenderAll();
    };

    handlePanningMode = () => {
        this.setState({
            panningMode: !this.state.panningMode
        });
    };

    handleElementPropChange = (obj, index) => {
        this.props.onElementPropChange(this.canvas, obj, index);
    };

    handleGroupPropChange = (obj) => {
        this.props.onGroupPropChange(this.canvas, obj);
    };

    handleBringToTop = () => {
        const activeObj = this.canvas.getActiveObject();
        activeObj.bringToFront();
    };
    handleSendToBack = () => {
        const activeObj = this.canvas.getActiveObject();
        activeObj.sendToBack();
    };
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
    };

    handleCanvasBgChange = (value) => {
        this.canvas.setBackgroundColor(value);
        this.canvas.renderAll();
    };
    handleCanvasBgImageChange = (image) => {
        image.set({
            ...this.state.canvasSize,
            scaleX: 1,
            scaleY: 1,
            top: 0,
            left: 0
        });
        this.canvas.setBackgroundImage(image, this.canvas.renderAll.bind(this.canvas), {
            backgroundImageOpacity: 0.5,
            backgroundImageStretch: false
        });
    };

    deviceViewHandler = (isDesktopView) => {
        this.canvasRef = null;
        this.setState({isDesktopView: isDesktopView});
    };

    handleLoadCanvas = (c) => {
        const {canvas, _id} = c;
        this.setState({
            currentlyEditingCanvasId: _id
        });
        this.canvas.loadFromJSON(canvas);
    };

    handleEdit = (id) => {
        const cb = () => {
            notifyInfo('The canvas was edited successfully ', 'Canvas', CanvasNotifyTime);
            this.canvas.clear();
            this.setState({
                currentlyEditingCanvasId: ''
            });
        };
        const canvas = this.canvas.toJSON(['customType', 'borderColor', 'borderDashArray', 'cornerColor', 'cornerSize', 'cornerStyle', 'transparentCorners', 'cornerStrokeColor', 'id', 'fillname']);
        this.props.onUpdateCanvas(id, canvas, cb);
    };
    handleCreateNewCanvas = () => {
        this.setState({
            currentlyEditingCanvasId: ''
        }, () => this.canvas.clear());
    };
    createNewCanvas = () => {
        const cb = () => {
            this.handleCreateNewCanvas();
            notifyInfo('The canvas was created successfully', 'Canvas', CanvasNotifyTime);
        };
        const canvas = this.canvas.toJSON(['customType', 'borderColor', 'borderDashArray', 'cornerColor', 'cornerSize', 'cornerStyle', 'transparentCorners', 'cornerStrokeColor', 'id', 'fillname']);
        this.props.onPostCanvas(canvas, cb );
    };
    handleDeleteCanvasWithId = (id) => {
        const cb = () => {
            notifyInfo('The canvas was deleted successfully', 'Canvas', CanvasNotifyTime);
            this.canvas.clear();
            this.setState({
                currentlyEditingCanvasId: ''
            });
        };
        this.props.onDeleteCanvas(id, cb);
    };

    render() {
        let canvas = this.canvas ? this.canvas.toObject() : null;
        const canvasSize = {
            height: 500,
            width: 650
        };
        if (!this.state.isDesktopView) {
            canvasSize.height = 500;
            canvasSize.width = 300;
        }
        return (
            <>
                <SidebarContainer
                    handleAdd={this.handleAdd}/>
                <div className="main-container">
                    <div>
                        <HeaderContainer
                            handleDeleteCanvasWithId={this.handleDeleteCanvasWithId}
                            currentlyEditingCanvasId={this.state.currentlyEditingCanvasId}
                            handleLoadCanvas={this.handleLoadCanvas}
                            handleCreateNewCanvas={this.handleCreateNewCanvas}
                            handleSave={this.handleSave}
                            panningMode={this.state.panningMode}
                            handlePanningMode={this.handlePanningMode}
                            handleUndoAndRedo={this.handleUndoAndRedo}
                            currentElement={this.props.currentElement}
                            handleRemove={this.handleRemove}
                            handleClone={this.handleClone}
                            handleUnGroupObjects={this.handleUnGroupObjects}
                            handleObjectsGroup={this.handleObjectsGroup}
                            bringToTop={this.handleBringToTop}
                            center={this.handleCenter}/>
                        <div className='main-container__canvas-section'>
                            <canvas
                                className='canvas'
                                height="550"//{this.state.canvasSize.height}
                                width="650"//{this.state.canvasSize.width}
                                id='canvas'>
                            </canvas>
                            <SettingsContainer
                                currentElement={this.props.currentElement}
                                elementChange={this.handleElementPropChange}
                                groupElementChange={this.handleGroupPropChange}
                                bringToTop={this.handleBringToTop}
                                sendToBack={this.handleSendToBack}
                                center={this.handleCenter}
                                changeCanvasBg={this.handleCanvasBgChange}
                                changeCanvasBgImage={this.handleCanvasBgImageChange}
                                canvas={canvas}
                            />
                        </div>
                    </div>
                    <Footer viewChanged={(event) => this.deviceViewHandler(event)}/>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentElement: state.canvas.currentElement
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onDeleteCanvas: (id, cb) => dispatch(actions.handleDeleteCanvasWithId(id, cb)),
        onUpdateCanvas: (id, canvas, cb) => dispatch(actions.handleUpdateCanvas(id, canvas, cb)),
        onPostCanvas: (canvas, cb) => dispatch(actions.handlePostCanvas(canvas, cb)),
        onCurrentObjectUpdate: (obj) => dispatch(actions.updateCurrentObject(obj)),
        onDeleteObject: (canvas, obj) => dispatch(actions.deleteObject(canvas, obj)),
        onElementPropChange: (canvas, obj, index) => dispatch(actions.updateElement(canvas, obj, index)),
        onGroupPropChange: (canvas, obj) => dispatch(actions.updateGroupElement(canvas, obj)),
        onUpdatePanningPosition: (data) => dispatch(actions.updatePanningPosition(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
