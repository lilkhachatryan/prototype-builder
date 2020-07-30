import React from 'react';
import { connect } from 'react-redux';

import Rect from "./tools/Rect";
import TextBox from "./tools/TextBox";
import Divider from "./tools/Divider";
import AddImageURL from "./tools/AddImageURL";
import UploadImage from "./tools/UploadImage";
import Button from "./tools/Button";
import Triangle from './tools/Triangle';
import Circle from './tools/Circle';

import './Sidebar.scss';
import ShareIcons from './tools/ShareIcons';

class SidebarContainer extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <div className="sidebarWrapper">
                <AddImageURL handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                <UploadImage handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                <Rect handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                {/* <Triangle handleAdd={handleAdd} /> */}
                <Circle handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                <TextBox handleAdd={handleAdd} fontSize="32" name="Header" panningPosition={this.props.panningPosition}/>
                <TextBox handleAdd={handleAdd} fontSize="24" name="Subheader" panningPosition={this.props.panningPosition}/>
                <TextBox handleAdd={handleAdd} fontSize="16" name="Text" panningPosition={this.props.panningPosition}/>
                <Divider handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                <Button handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                <ShareIcons handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        panningPosition: state.panningPosition
    };
};

export default connect(mapStateToProps)(SidebarContainer);
