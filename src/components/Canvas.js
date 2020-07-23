import React from 'react';
import {fabric} from 'fabric';
import Rect from "./Rect";

class Canvas extends React.Component{
    state = {
        currentElement: null,
        inputValue: 'black'
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

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleAdd = (obj) => {
        this.canvas.add(obj);
    };

    handleLog = () => {
        this.canvas.getActiveObjects().map( (o) => o.set('fill', this.state.inputValue));
        this.canvas.renderAll();
    };

    render() {
        return (
            <div>
                <canvas
                    className='canvas'
                    height={500}
                    width={600}
                    id='canvas'>

                </canvas>
                <Rect handleAdd={this.handleAdd} />
                <input
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    type="text"/>
                <button onClick={this.handleLog} >Set Color to red</button>
            </div>
        );
    }
}

export default Canvas;
