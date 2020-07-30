import React from 'react';
import { fabric } from 'fabric';

class UploadImage extends React.Component {
    state = {
        chooseFiles: [],
        filePath: ''
    };
    handleChange = (e) => {
        e.persist();
        const files = [...e.target.files];
        this.setState({
            chooseFiles: files,
            filePath: e.target.value
        });
    };
    handleClick = () => {
        const handleAdd = (input) => {
            this.props.handleAdd(input);
            this.setState({
                filePath: '',
                chooseFiles: []
            });
        };
        this.state.chooseFiles.forEach((file) => {
            const fileType = file.type;
            const url = URL.createObjectURL(file);
            if (fileType === 'image/png' || 'image/jpeg') { //check if png
                fabric.Image.fromURL(url, function (img) {
                    handleAdd(img);
                }, {
                    // width: '180',
                    // height: '180',
                    stroke: '#FFFFFF',
                    strokeWidth: 0,
                    borderColor: 'gray',
                    borderDashArray: [4, 3],
                    cornerColor: '#49f500',
                    cornerSize: 11,
                    cornerStyle: 'circle',
                    transparentCorners: false,
                    cornerStrokeColor: '#aaaaaa',
                    scaleX: 0.3,
                    scaleY: 0.3,
                });
            } else if (fileType === 'image/svg+xml') { //check if svg
                fabric.loadSVGFromURL(url, function (objects, options) {
                    const svg = fabric.util.groupSVGElements(objects, options);
                    // svg.scaleToWidth(180);
                    // svg.scaleToHeight(180);
                    handleAdd(svg);
                });
            }
        });
    };
    render() {
        return (
            <div>
                <input
                    value={this.state.filePath}
                    onChange={this.handleChange}
                    type="file" />
                <button className="primary" onClick={this.handleClick} >Add image</button>
            </div>
        );
    }
}

export default UploadImage;
