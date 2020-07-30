import React from 'react';

class ShapeSettings extends React.Component {

    state = {
        inputs: {
            colors: this.props.currentElement.colors || 'official',
            fill: this.props.currentElement.fillName || '',
            direction: 'horizontal'
        }
    }

    componentDidMount = () => {
        console.log(this.props.currentElement)
        const newAtts = {
            ...this.state.inputs,
            colors: this.props.currentElement.colors || 'official',
            fill: this.props.currentElement.fillName || '',
        }
        this.setState({ inputs: newAtts })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                ...this.state.inputs,
                colors: this.props.currentElement.colors,
                fill: this.props.currentElement.fillName
            }
            this.setState({ inputs: newAtts })
        }
    }

    handleColorSelect = (event) => {
        const newInputs = { ...this.state.inputs, colors: event.target.value }
        this.setState({ inputs: newInputs });
        this.props.groupElementChange({ colors: event.target.value })
    }

    handleColorPicker = event => {
        const newInputs = { ...this.state.inputs, fill: event.target.value }
        this.setState({ inputs: newInputs });
        this.props.groupElementChange({ fill: event.target.value })
    }

    render() {
        return (
            <div>

                <div>
                    <label>Icons color</label>
                    <select onChange={this.handleColorSelect} value={this.state.inputs.colors}>
                        <option value="official">Official</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                {
                    this.state.inputs.colors === 'official'
                        ? null
                        : <div>
                            <label>Fill</label>
                            <input
                                type="color"
                                onChange={this.handleColorPicker}
                                value={this.state.inputs.fill} />
                        </div>
                }
                <button>Vertical</button>

            </div>
        );
    }
}

export default ShapeSettings;
