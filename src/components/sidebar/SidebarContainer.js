import React from 'react';
import Rect from "./tools/Rect";
import { SidebarWrapper } from "../../assets/styles/SidebarWrapper.style";
import TextBox from "./tools/TextBox";
import Divider from "./tools/Divider";
import AddImageURL from "./tools/AddImageURL";
import UploadImage from "./tools/UploadImage";
import Button from "./tools/Button";
import Triangle from './tools/Triangle';
import Circle from './tools/Circle';

class SidebarContainer extends React.Component {
    render() {
        const { handleAdd, loadAndRender } = this.props;
        return (
            <SidebarWrapper>
                {/*<AddImageURL handleAdd={handleAdd} />*/}
                {/*<UploadImage handleAdd={handleAdd} />*/}
                <Rect />
                {/*<Triangle handleAdd={handleAdd} />*/}
                <Circle />
                {/*<TextBox handleAdd={handleAdd} />*/}
                {/*<Divider handleAdd={handleAdd} />*/}
                {/*<Button handleAdd={handleAdd} />*/}
            </SidebarWrapper>
        );
    }
}

export default SidebarContainer;
