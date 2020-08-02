import React from 'react';
import { cloneDeep } from 'lodash';
import './ShapeSettings.scss';

class ShapeSettings extends React.Component {

    state = {
        inputs: {
            fill: this.props.currentElement.fill,
            strokeWidth: this.props.currentElement.strokeWidth,
            stroke: this.props.currentElement.stroke,
            opacity: this.props.currentElement.opacity,
            ry: this.props.currentElement.ry,
            shadow: { ...this.props.currentElement.shadow }
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                fill: this.props.currentElement.fill,
                strokeWidth: this.props.currentElement.strokeWidth,
                stroke: this.props.currentElement.stroke,
                opacity: this.props.currentElement.opacity,
                ry: this.props.currentElement.ry,
                shadow: { ...this.props.currentElement.shadow }
            };
            this.setState({ inputs: newAtts });
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;
        let newInputs = cloneDeep(this.state.inputs);
        newInputs[type] = value;
        this.setState({ inputs: newInputs });

        if (type === 'opacity' || type === 'strokeWidth') {
            value = +value;
        }
        if (type === 'ry') {
            this.props.elementChange({ rx: value, ry: value });
        } else {
            this.props.elementChange({ [type]: value });
        }
    };

    handleShadowChange = (event, type) => {
        let newInputs = cloneDeep(this.state.inputs);
        let newShadow = { ...this.state.inputs.shadow };
        newShadow[type] = event.target.value;
        newInputs.shadow = newShadow;
        this.setState({ inputs: newInputs });
        this.props.elementChange({ shadow: newShadow });
    };

    render() {
        return (
            <div>
                <div className='mb-3 flexInput'>
                    <label>Fill</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'fill')}
                        value={this.state.inputs.fill} />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input className='field-styling' type="number" step="1" value={this.state.inputs.strokeWidth}
                        onChange={(_) => this.handleChange(_, 'strokeWidth')} />
                </div>
                {this.props.currentElement.type !== 'rect' ? null : <div className='mb-3 flexInput'>
                    <label>Border radius (px)</label>
                    <input className='field-styling' type="number" value={this.state.inputs.ry}
                        onChange={(_) => this.handleChange(_, 'ry')} />
                </div>}

                <div className='mb-3 flexInput'>
                    <label>Stroke Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'stroke')}
                        value={this.state.inputs.stroke}
                    />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Opacity:</label>
                    <input
                        type="range"
                        name="opacity"
                        min="0"
                        max="1"
                        step="0.05"
                        value={this.state.inputs.opacity}
                        onChange={(_) => this.handleChange(_, 'opacity')}
                    />
                </div>
                <div className="shadowSettings">
                    <h6>Box shadow</h6>
                    <div>
                        <label>Color</label>
                        <input type="color" onChange={(_) => this.handleShadowChange(_, 'color')} value={this.state.inputs.shadow.color} />
                    </div>
                    <div>
                        <label>Blur</label>
                        <input type="number" className="field-styling" onChange={(_) => this.handleShadowChange(_, 'blur')} value={this.state.inputs.shadow.blur} />
                    </div>
                    <div>
                        <label>Horizontal</label>
                        <input type="number" className="field-styling" onChange={(_) => this.handleShadowChange(_, 'offsetX')} value={this.state.inputs.shadow.offsetX} />
                    </div>
                    <div>
                        <label>Vertical</label>
                        <input type="number" className="field-styling" onChange={(_) => this.handleShadowChange(_, 'offsetY')} value={this.state.inputs.shadow.offsetY} />
                    </div>
                    <div id="color-picker-1" className="mx-auto"/>
                </div>
            </div>
        );
    }
}

export default ShapeSettings;
