import React from 'react';
import UploadImage from '../sidebar/tools/UploadImage/UploadImage';

class CanvasSettings extends React.Component {

    state = {
        bgColor:  this.props.canvas ? this.props.canvas.background : '#FFFFFF'
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.canvas !== this.props.canvas) {
            this.setState({bgColor: this.props.canvas ? this.props.canvas.background : '#FFFFFF'});
        }
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return (nextProps.canvas !== this.props.canvas || nextState.bgColor !== this.state.bgColor);
    };

    handleChange = (event) => {
        this.props.changeCanvasBg(event.target.value);
        this.setState({bgColor: event.target.value});
    };

    handleAdd = (image) => {
        this.props.changeCanvasBgImage(image);
        this.setState(image);
    };

    render() {
        return (
            <div>
                <h4>Canvas Settings</h4>
                <div>
                    <label>Background color &nbsp;</label>
                    <input type='color' onChange={this.handleChange} value={this.state.bgColor || '#FFFFFF'}/>
                </div>
                <hr className='dropdown-divider'/>
                <div className='canvas-settings-background'>
                    <label>Background image</label>
                    <UploadImage handleAdd={this.handleAdd} panningPosition={{}}/>
                </div>
                <hr className='dropdown-divider'/>
                <h6>
                    Select an object to edit
                </h6>
            </div>
        );
    }
}

export default CanvasSettings;
