import React from 'react';
import {fabric} from 'fabric';
import {v4 as uuid} from 'uuid';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './UploadImageFromPC.scss';

class UploadImageFromPC extends React.Component {
    state = {
        labelName: 'Choose a file...',
        chooseFiles: [],
        filePath: ''
    };
    handleChange = (e) => {
        const fileName = e.nativeEvent.target.files[0].name;
        e.persist();
        const files = [...e.target.files];
        this.setState({
            labelName: fileName,
            chooseFiles: files,
            filePath: e.target.value
        });
    };
    handleClick = () => {
        const handleAdd = (input) => {
            this.props.handleAdd(input);
            this.setState({
                filePath: '',
                chooseFiles: [],
                labelName: 'Choose a file...'
            });
        };
        const { panningPosition } = this.props;
        this.state.chooseFiles.forEach((file) => {
            const fileType = file.type;
            const url = URL.createObjectURL(file);
            if (fileType === 'image/png' || 'image/jpeg') { //check if png
                fabric.Image.fromURL(url, function (img) {
                    handleAdd(img);
                }, {
                    // width: '180',
                    // height: '180',
                    id: uuid(),
                    top: -panningPosition.y + 100,
                    left: -panningPosition.x + 100,
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
        let id = uuid();
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <input value={this.state.filePath}
                       onChange={this.handleChange}
                       type='file'
                       name='file'
                       id={id}
                       className='inputfile'/>
                <div className='labelContainer'>
                    <FontAwesomeIcon icon={faUpload} />
                    <label htmlFor={id}>{this.state.labelName}</label>
                </div>

                <button className='inputButton btn' onClick={this.handleClick}>ADD</button>
            </div>
        );
    }
}

export default UploadImageFromPC;
