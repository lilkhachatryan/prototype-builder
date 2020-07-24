import React from 'react';
import TextSettings from './TextSettings/TextSettings';

class SettingsContainer extends React.Component {

    state = {
        inputs: {
            bgColor: '#FFFFFF',
            fontSize: 0,
            fontFamily: '',
            fontWeight: 0,
            textAlign: '',
            borderWidth: 0,
            borderColor: '#FFFFFF',
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;

        let newInputs = { ...this.state.inputs };
        newInputs[type] = value;
        this.setState({ inputs: newInputs });

        let changeProp = '';
        switch (type) {

            case 'bgColor':
                changeProp = 'fill';
                break;
            case 'fontSize':
                value = +value;
                changeProp = 'fontSize';
                break;
            case 'fontFamily':
                changeProp = 'fontFamily';
                break;
            case 'fontWeight':
                value = +value;
                changeProp = 'fontWeight';
                break;
            case 'textAlign':
                changeProp = 'textAlign';
                break;
            case 'borderWidth':
                value = +value;
                changeProp = 'strokeWidth';
                break;
            case 'borderColor':
                changeProp = 'stroke';
                break;
            default:
                changeProp = ''
        }
        this.props.elementChange(changeProp, value)
    };

    render() {
        return (
            <TextSettings elementChange={this.props.elementChange}/>
        );
    }
}

export default SettingsContainer;
