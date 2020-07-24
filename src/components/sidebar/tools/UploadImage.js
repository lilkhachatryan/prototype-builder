import React from 'react';
import {fabric} from 'fabric';

class UploadImage extends React.Component{
    state = {
        chooseFiles: [],
    };
    handleChange = (e) => {
        e.persist();
        const files = [...e.target.files];
        this.setState({
            chooseFiles: files
        });
    };
    handleClick = () => {
        const handleAdd = (input) => {
            this.props.handleAdd(input);
        };
        this.state.chooseFiles.forEach( (file) => {
            const fileType = file.type;
            const url = URL.createObjectURL(file);
            if (fileType === 'image/png' || 'image/jpeg') { //check if png
                fabric.Image.fromURL(url, function(img) {
                    // img.set({
                    //     width: 180,
                    //     height: 180
                    // });
                    handleAdd(img);
                });
            } else if (fileType === 'image/svg+xml') { //check if svg
                fabric.loadSVGFromURL(url, function(objects, options) {
                    const svg = fabric.util.groupSVGElements(objects, options);
                    // svg.scaleToWidth(180);
                    // svg.scaleToHeight(180);
                    handleAdd(svg);
                });
            }
        } );
    };
    render() {
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    type="file"/>
                    <button onClick={this.handleClick} >Add image</button>
            </div>
        );
    }
}

export default UploadImage;
