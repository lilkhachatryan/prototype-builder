import React from 'react';
import Rect from "./tools/Rect";
import TextBox from "./tools/TextBox";
import Divider from "./tools/Divider";
import AddImageURL from "./tools/AddImageURL";
import UploadImage from "./tools/UploadImage";


import Triangle from './tools/Triangle';
import Circle from './tools/Circle';

class SidebarContainer extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <div>
                <AddImageURL handleAdd={handleAdd}/>
               <UploadImage handleAdd={handleAdd} />
                <Rect handleAdd={handleAdd} />
                <Triangle handleAdd={handleAdd} />
                <Circle handleAdd={handleAdd} />
                <TextBox handleAdd={handleAdd} />
                <Divider handleAdd={handleAdd} />
            </div>
        );
    }
}

export default SidebarContainer;
