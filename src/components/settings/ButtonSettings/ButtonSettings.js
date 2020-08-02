import React, { Component } from 'react';
import { fontFamily } from '../../../utils/helpers';

import './ButtonSettings.scss';

class ButtonSettings extends Component {
    state = {
        rect: {
            ...this.props.currentElement.objects[0]
        },
        text: {
            ...this.props.currentElement.objects[1]
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                rect: {
                    ...this.props.currentElement.objects[0]
                },
                text: {
                    ...this.props.currentElement.objects[1]
                }
            };
            this.setState({ ...newAtts });
        }
    };

    handleChange = (event, type, index) => {
        let value = event.target.value;
        if (index === 0) {
            let newInputs = { ...this.state.rect };
            newInputs[type] = value;
            this.setState({ rect: newInputs });
        } else {
            let newInputs = { ...this.state.text };
            if (type === 'textDecoration') {
                this.props.elementChange({ 'underline': false, 'linethrough': false, 'overline': false }, 1);
                type = value;
                value = true;
            }
            newInputs[type] = value;
            this.setState({ text: newInputs });
        }

        if (type === 'fontSize' || type === 'strokeWidth' || type === 'fontWeight' || type === 'lineHeight') {
            value = +value;
        }
        if (type === 'charSpacing') {
            value = +value * 25;
        }

        if (type === 'ry') {
            this.props.elementChange({ rx: value, ry: value }, index);
        } else {
            this.props.elementChange({ [type]: value }, index);
        }
    };

    render() {
        return (
            <div className="buttonSettings">
                <div className='mb-3 flexInput'>
                    <label>Fill &nbsp;</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'fill', 0)}
                        value={this.state.rect.fill} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input
                        className='field-styling' type="number" step="1" value={this.state.rect.strokeWidth}
                        onChange={(_) => this.handleChange(_, 'strokeWidth', 0)} />
                </div>

                <div className='mb-3 flexInput'>
                    <label>Stroke Color &nbsp;</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'stroke', 0)}
                        value={this.state.rect.stroke}
                    />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Border radius (px)</label>
                    <input
                        className='field-styling' type="number" value={this.state.rect.ry}
                        onChange={(_) => this.handleChange(_, 'ry', 0)} />
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
                        value={this.props.currentElement.opacity}
                        onChange={(_) => this.handleChange(_, 'opacity')}
                    />
                </div>
                <h6 className="mt-3">Text styles</h6>
                <div className="mb-3 flexInput">
                    <label>{this.props.currentElement.type === 'button' ? 'Button text' : 'Placeholder'}</label>
                    <input type="text" value={this.state.text.text} onChange={(_) => this.handleChange(_, 'text', 1)}/>
                </div>

                <div className='mb-3 flexInput'>
                    <label>Text Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'fill', 1)}
                        value={this.state.text.fill} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Size (px)</label>
                    <input
                        className='field-styling' type="number" value={this.state.text.fontSize}
                        onChange={(_) => this.handleChange(_, 'fontSize', 1)} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Line height (em)</label>
                    <input
                        className='field-styling' type="number" step="0.1" value={this.state.text.lineHeight}
                        onChange={(_) => this.handleChange(_, 'lineHeight', 1)} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Letter spacing</label>
                    <input
                        className='field-styling' type="number" step="1" value={this.state.text.charSpacing / 25}
                        onChange={(_) => this.handleChange(_, 'charSpacing', 1)} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Family</label>
                    <select className='field-styling' onChange={(_) => this.handleChange(_, 'fontFamily', 1)}
                        value={this.state.text.fontFamily}>
                        {fontFamily.map(el => (
                            <option key={el} value={el} style={{ fontFamily: el }}>{el}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Weight</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleChange(_, 'fontWeight', 1)}
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
                    <label>Text Decoration</label>
                    <select
                        className='field-styling' onChange={(_) => this.handleChange(_, 'textDecoration', 1)}
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
                        className='field-styling' onChange={(_) => this.handleChange(_, 'fontStyle', 1)}
                        value={this.state.text.fontStyle}>
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default ButtonSettings;
