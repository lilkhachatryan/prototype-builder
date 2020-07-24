import React from 'react';
import {fabric} from 'fabric';
import SideNav from "./sideNavigation/SideNav";

class CanvasContainer extends React.Component{
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
        this.canvas.on('selection:updated', (event) => {
            this.setState({
                currentElement: event.target
            });
        });

    }
    handleAdd = (obj) => {
        this.canvas.add(obj);
    };
    render() {
        return (
            <div>
                <SideNav handleAdd={this.handleAdd}/>
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
