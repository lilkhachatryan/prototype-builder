import React from 'react';

import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fontFamily } from '../../../utils/helpers';

import './TextSettings.scss';

class TextSettings extends React.Component {

    state = {
        inputs: {
            ...this.props.currentElement
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                ...this.props.currentElement
            };
            this.setState({ inputs: newAtts });
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;
        let newInputs = { ...this.state.inputs };
        newInputs[type] = value;
        this.setState({ inputs: newInputs });

        if (type === 'fontSize' || type === 'strokeWidth' || type === 'fontWeight' || type === 'lineHeight') {
            value = +value;
        }
        if (type === 'charSpacing') {
            value = +value * 25;
        }

        if (type === 'textDecoration') {
            this.props.elementChange({ 'underline': false, 'linethrough': false, 'overline': false });
            type = value;
            value = true;
        }
        this.props.elementChange({ [type]: value });

    };

    render() {
        return (
            <div className='textSettings itemSettings'>
                <div className='mb-3 flexInput'>
                    <label>Text Color</label>
                    <input
                        type='color'
                        onChange={(_) => this.handleChange(_, 'fill')}
                        value={this.state.inputs.fill} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Size (px)</label>
                    <input type='number' value={this.state.inputs.fontSize} className='field-styling'
                        onChange={(_) => this.handleChange(_, 'fontSize')} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Line height (em)</label>
                    <input type='number' step='0.1' value={this.state.inputs.lineHeight} className='field-styling'
                        onChange={(_) => this.handleChange(_, 'lineHeight')} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Letter spacing</label>
                    <input
                        className='field-styling' type="number" step="1" value={this.state.inputs.charSpacing}
                        onChange={(_) => this.handleChange(_, 'charSpacing')} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Family</label>
                    <select className='field-styling' onChange={(_) => this.handleChange(_, 'fontFamily')}
                        value={this.state.inputs.fontFamily}>
                        {fontFamily.map(el => (
                            <option key={el} value={el} style={{ fontFamily: el }}>{el}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Weight</label>
                    <select className='field-styling' onChange={(_) => this.handleChange(_, 'fontWeight')}
                        value={this.state.inputs.fontWeight}>
                        <option value='0'></option>
                        <option value='300'>300</option>
                        <option value='400'>400</option>
                        <option value='500'>500</option>
                        <option value='600'>600</option>
                        <option value='700'>700</option>
                        <option value='900'>900</option>
                    </select>
                </div>
                <div>
                    <div className='textAlignSettings'>
                        <div>
                            <input
                                type='radio'
                                name='textAlign'
                                value='left'
                                id='left'
                                className='field-styling'
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'left'} />
                            <label htmlFor='left'><FontAwesomeIcon icon={faAlignLeft} /></label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='textAlign'
                                value='center'
                                id='center'
                                className='field-styling'
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'center'} />
                            <label htmlFor='center'><FontAwesomeIcon icon={faAlignCenter} /></label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='textAlign'
                                value='right'
                                id='right'
                                className='field-styling'
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'right'} />
                            <label htmlFor='right'><FontAwesomeIcon icon={faAlignRight} /></label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='textAlign'
                                value='justify'
                                id='justify'
                                className='field-styling'
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'justify'} />
                            <label htmlFor='justify'><FontAwesomeIcon icon={faAlignJustify} /></label>
                        </div>
                    </div>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Text Decoration</label>
                    <select onChange={(_) => this.handleChange(_, 'textDecoration')}
                        value={this.state.inputs.textDecoration} className='field-styling'>
                        <option value=''>None</option>
                        <option value='underline'>Underline</option>
                        <option value='linethrough'>Linethrough</option>
                        <option value='overline'>Overline</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Font Style</label>
                    <select className='field-styling' onChange={(_) => this.handleChange(_, 'fontStyle')}
                        value={this.state.inputs.fontStyle}>
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                    </select>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input type='number' step='0.1' value={this.state.inputs.strokeWidth} className='field-styling'
                        onChange={(_) => this.handleChange(_, 'strokeWidth')} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Color</label>
                    <input
                        type='color'
                        onChange={(_) => this.handleChange(_, 'stroke')}
                        value={this.state.inputs.stroke}
                    />
                </div>
            </div>
        );
    }
}

export default TextSettings;
