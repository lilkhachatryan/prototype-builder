import React from 'react';

class ShapeSettings extends React.Component {

    state = {
        inputs: {
            colors: this.props.currentElement.colors || 'official',
            fill: this.props.currentElement.fillName || '',
        }
    };

    componentDidMount = () => {
        const newAtts = {
            ...this.state.inputs,
            colors: this.props.currentElement.colors || 'official',
            fill: this.props.currentElement.fillName || '',
        };
        this.setState({inputs: newAtts});
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                ...this.state.inputs,
                colors: this.props.currentElement.colors,
                fill: this.props.currentElement.fillName,
            };
            this.setState({inputs: newAtts});
        }
    };

    handleChange = (event, type) => {
        const newInputs = {...this.state.inputs, [type]: event.target.value};
        this.props.groupElementChange({[type]: event.target.value});
        this.setState({inputs: newInputs});
    };

    render() {
        return (
            <div>
                <div className='mb-3 flexInput'>
                    <label className='mb-0'>Icons color</label>
                    <select className='field-styling' onChange={(_) => this.handleChange(_, 'colors')}
                            value={this.state.inputs.colors}>
                        <option value='official'>Official</option>
                        <option value='custom'>Custom</option>
                    </select>
                </div>
                {
                    this.state.inputs.colors !== 'custom' ?
                        null
                        : <div className='mb-3 flexInput'>
                            <label>Fill</label>
                            <input
                                type='color'
                                onChange={(_) => this.handleChange(_, 'fill')}
                                value={this.state.inputs.fill}/>
                        </div>
                }
            </div>
        );
    }
}

export default ShapeSettings;
