import React, {Component} from 'react';

class ButtonSettings extends Component {
    state = {
        rect: {
            ...this.props.currentElement.objects[0]
        },
        text: {
            ...this.props.currentElement.objects[1]
        }
    };

    handleTextChange = (event, type) => {
        let newInputs = {...this.state.text};
        let value = event.target.value;
        newInputs[type] = value;
        this.setState({text: newInputs});

        if (type === 'fontSize' || type === 'strokeWidth' || type === 'fontWeight' || type === 'lineHeight') {
            value = +value;
        }

        if (type === 'textDecoration') {
            this.props.elementChange({'underline': false, 'linethrough': false, 'overline': false});
            type = value;
            value = true;
        }
        this.props.elementChange({[type]: value});
    };

    handleRectChange = (event, type) => {
        let newInputs = {...this.state.rect};
        let value = event.target.value;
        newInputs[type] = value;
        this.setState({rect: newInputs});

        // if (type === 'fill') {
        //     this.setState({ text : {...this.state.text, fill: value }});
        //     this.props.elementChange({ [type]: value });
        // }

        if (type === 'fontSize' || type === 'strokeWidth' || type === 'fontWeight' || type === 'lineHeight') {
            value = +value;
        }

        if (type === 'textDecoration') {
            this.props.elementChange({'underline': false, 'linethrough': false, 'overline': false});
            type = value;
            value = true;
        }
        this.props.elementChange({[type]: value});
    };

    render() {
        return (
            <div>
                <div className='mb-3 flexInput'>
                    <label>Fill &nbsp;</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleRectChange(_, 'fill')}
                        value={this.state.rect.fill}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input
                        className='field-styling' type="number" step="1" value={this.state.rect.strokeWidth}
                        onChange={(_) => this.handleRectChange(_, 'strokeWidth')}/>
                </div>
                {this.props.currentElement.type !== 'rect' ? null : <div className='mb-3 flexInput'>
                    <label>Border radius (px)</label>
                    <input
                        className='field-styling' type="number" value={this.state.rect.ry}
                        onChange={(_) => this.handleRectChange(_, 'ry')}/>
                </div>}

                <div className='mb-3 flexInput'>
                    <label>Stroke Color &nbsp;</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleRectChange(_, 'stroke')}
                        value={this.state.rect.stroke}
                    />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Opacity:</label>
                    <input
                        className='field-styling'
                        type="range"
                        name="opacity"
                        min="0"
                        max="1"
                        step="0.05"
                        value={this.state.rect.opacity}
                        onChange={(_) => this.handleRectChange(_, 'opacity')}
                    />
                </div>
                <p className="mt-3">Text styles</p>
                <div className='mb-3 flexInput'>
                    <label>Text Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleTextChange(_, 'fill')}
                        value={this.state.text.fill}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Size (px)</label>
                    <input
                        className='field-styling' type="number" value={this.state.text.fontSize}
                        onChange={(_) => this.handleTextChange(_, 'fontSize')}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Line height (em)</label>
                    <input
                        className='field-styling' type="number" step="0.1" value={this.state.text.lineHeight}
                        onChange={(_) => this.handleTextChange(_, 'lineHeight')}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Family</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleTextChange(_, 'fontFamily')}
                        value={this.state.text.fontFamily}>
                        <option value="">Choose font family</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Weight</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleTextChange(_, 'fontWeight')}
                        value={this.state.text.fontWeight}>
                        <option value="0"></option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="900">900</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <p>Text Align</p>
                    <div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="left"
                                id="left"
                                onChange={(_) => this.handleTextChange(_, 'textAlign')}
                                checked={this.state.text.textAlign === 'left'}/>
                            <label htmlFor="left">Left</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="center"
                                id="center"
                                onChange={(_) => this.handleTextChange(_, 'textAlign')}
                                checked={this.state.text.textAlign === 'center'}/>
                            <label htmlFor="center">Center</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="right"
                                id="right"
                                onChange={(_) => this.handleTextChange(_, 'textAlign')}
                                checked={this.state.text.textAlign === 'right'}/>
                            <label htmlFor="right">Right</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="justify"
                                id="justify"
                                onChange={(_) => this.handleTextChange(_, 'textAlign')}
                                checked={this.state.text.textAlign === 'justify'}/>
                            <label htmlFor="justify">Justify</label>
                        </div>
                    </div>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Text Decoration</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleTextChange(_, 'textDecoration')}
                        value={this.state.text.textDecoration}>
                        <option value="">None</option>
                        <option value="underline">Underline</option>
                        <option value="linethrough">Linethrough</option>
                        <option value="overline">Overline</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Style</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleTextChange(_, 'fontStyle')}
                        value={this.state.text.fontStyle}>
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input
                        className='field-styling' type="number" step="0.1" value={this.state.text.strokeWidth}
                        onChange={(_) => this.handleTextChange(_, 'strokeWidth')}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleTextChange(_, 'stroke')}
                        value={this.state.text.stroke}
                    />
                </div>
            </div>
        );
    }
}

export default ButtonSettings;
