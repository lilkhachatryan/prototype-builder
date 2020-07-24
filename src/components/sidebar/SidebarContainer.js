import React from 'react';
import Rect from "./tools/Rect";
import TextBox from "./tools/TextBox";
import Divider from "./tools/Divider";
import Triangle from './tools/Triangle';
import Circle from './tools/Circle';

class SidebarContainer extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <div>
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
