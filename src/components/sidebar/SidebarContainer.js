import React from 'react';
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
                <AddImageURL handleAdd={handleAdd} />
                <UploadImage handleAdd={handleAdd} />
                <Rect handleAdd={handleAdd} />
                {/* <Triangle handleAdd={handleAdd} /> */}
                <Circle handleAdd={handleAdd} />
                <TextBox handleAdd={handleAdd} fontSize="32" name="Header"/>
                <TextBox handleAdd={handleAdd} fontSize="24" name="Subheader"/>
                <TextBox handleAdd={handleAdd} fontSize="16" name="Text"/>
                <Divider handleAdd={handleAdd} />
                <Button handleAdd={handleAdd} />
                <ShareIcons handleAdd={handleAdd}/>
            </div>
        );
    }
}

export default SidebarContainer;
