import React from 'react';
import {connect} from 'react-redux';
import CanvasesItem from "./CanvasesItem";
import {handleLoadCanvases} from "../../actions/canvasActions";
import Loader from "../Shared/Loader";


class ConnectedCanvasesList extends React.Component {
    componentDidMount() {
        if (!this.props.canvases.length) {
            this.props.dispatch(handleLoadCanvases());
        }
    }

    render() {
        const mappedCanvases = this.props.canvases.map(c => <CanvasesItem
            handleDeleteCanvasWithId={this.props.handleDeleteCanvasWithId}
            active={this.props.currentlyEditingCanvasId === c._id}
            handleLoadCanvas={this.props.handleLoadCanvas}
            key={c._id}
            item={c}/>);
        if (this.props.loading) {
            return <Loader/>;
        }
        return (
            <div>
                {mappedCanvases}
            </div>
        );
    }

}

export default connect(state => ({
    canvases: state.canvases.canvases,
    loading: state.canvases.loading
}))(ConnectedCanvasesList);
