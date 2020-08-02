import React from 'react';
import {connect} from 'react-redux';
import CanvasesItem from "./CanvasesItem";
import {handleLoadCanvases} from "../../actions/canvasActions";


class ConnectedCanvasesList extends React.Component{
    componentDidMount() {
        if (!this.props.canvases.length){
            this.props.dispatch(handleLoadCanvases());
        }
    }

    render() {
        const mappedCanvases = this.props.canvases.map( c => <CanvasesItem
            active={this.props.currentlyEditingCanvasId === c._id}
            handleLoadCanvas={this.props.handleLoadCanvas}
            key={c._id}
            item={c} /> );
        return (
            <div>
                {mappedCanvases}
            </div>
        );
    }

}

export default connect(state => ({
    canvases: state.canvases.canvases
}))(ConnectedCanvasesList);
