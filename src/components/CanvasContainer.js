import React from 'react';
import {fabric} from 'fabric';
import SidebarContainer from "./sidebar/SidebarContainer";
import SettingsContainer from "./settings/SettingsContainer";

class CanvasContainer extends React.Component {
    state = {
        currentElement: null,
    };

    componentDidMount() {
        this.canvas = new fabric.Canvas('canvas');
        this.canvas.on('selection:created', (event) => {
            this.setState({
                currentElement: event.target
            });
        });
        this.handleZoom();
        this.canvas.on('selection:updated', (event) => {
            this.setState({
                currentElement: event.target
            });
        });

    }


    handleAdd = (obj) => {
        this.canvas.add(obj);
    };
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
    };

    render() {
        return (
            <div>
                <SidebarContainer handleAdd={this.handleAdd}/>
                <SettingsContainer/>
                <div className='canvas__wrapper' >
                    <canvas
                        className='canvas'
                        height={500}
                        width={600}
                        id='canvas'>
                    </canvas>
                </div>
            </div>
        );
    }
}

export default CanvasContainer;
