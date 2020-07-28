import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentElement } from "../../../../actions/canvas";

class ShapeSettings extends React.Component {
    state = {
        inputs: {
            fill: this.props.currentElement.fill,
            strokeWidth: this.props.currentElement.strokeWidth,
            stroke: this.props.currentElement.stroke,
            opacity: this.props.currentElement.opacity,
            ry: this.props.currentElement.ry,
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
            };
            this.setState({ inputs: newAtts });
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;
        let newInputs = { ...this.state.inputs };
        newInputs[type] = value;

        // TODO check this part in all setting components, setState too
        let selectedObject = {
            [type]: value
        };

        if (type === 'opacity' || type === 'strokeWidth') {
            value = +value;
            selectedObject = {
                [type]: +value
            };
        }
        if (type === 'ry') {
            selectedObject = { rx: value, ry: value };
        } else {
            selectedObject = { [type]: value };
        }
        this.setState({ inputs: newInputs });
        console.log('selectedObject', selectedObject);
        this.props.updateCurrentElement({ selectedObject });
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
                {this.props.currentElement.type !== 'rect' ? null : <div>
                    <label>Border radius (px)</label>
                    <input type="number" value={this.state.inputs.ry} onChange={(_) => this.handleChange(_, 'ry')} />
                </div>}

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

const mapStateToProps = (state) => {
    return {
        currentElement: state.canvas.selectedObject
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentElement: (payload) => dispatch(updateCurrentElement(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapeSettings);
