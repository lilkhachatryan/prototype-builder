import React from 'react';

class ImageSettings extends React.Component {

    state = {
        inputs: {
            fill: this.props.currentElement.fill,
            strokeWidth: this.props.currentElement.strokeWidth,
            stroke: this.props.currentElement.stroke,
            opacity: this.props.currentElement.opacity,
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                fill: this.props.currentElement.fill,
                strokeWidth: this.props.currentElement.strokeWidth,
                stroke: this.props.currentElement.stroke,
                opacity: this.props.currentElement.opacity,
            }
            this.setState({ inputs: newAtts })
        };
    };

    handleChange = (event, type) => {
        console.log(type, ':', event.target.value)
        let value = event.target.value;
        let newInputs = { ...this.state.inputs };
        newInputs[type] = value;
        this.setState({ inputs: newInputs });

        if (type === 'opacity' || type === 'strokeWidth') {
            value = +value
        }
        if (type === 'ry') {
            this.props.elementChange({ rx: value, ry: value })
        } else {
            this.props.elementChange({ [type]:value })
        }
    };

    render() {
        return (
            <div>
                <div>
                    <label>Fill</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'fill')}
                        value={this.state.inputs.fill} />
                </div>
                <div>
                    <label>Stroke Width (px)</label>
                    <input type="number" step="1" value={this.state.inputs.strokeWidth} onChange={(_) => this.handleChange(_, 'strokeWidth')} />
                </div>

                <div>
                    <label>Stroke Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'stroke')}
                        value={this.state.inputs.stroke}
                    />
                </div>
                <div>
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
            </div>
        );
    }
}

export default ImageSettings;
