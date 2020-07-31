import React from 'react';
import Footer from "./Footer/Footer";
import CanvasContainer from "../CanvasContainer/CanvasContainer";
import Header from "./Hader/Header";


class PageLayout extends React.Component {
    state = {
        isDesktopView: false,
    };

    deviceViewHandler = (isDesktopView) => {
        this.canvasRef = null;
        this.setState({isDesktopView: isDesktopView});
    };

    render() {
        const canvasSize = {
            height: 600,
            width: 800
        };
        if (!this.state.isDesktopView){
            canvasSize.height = 500;
            canvasSize.width = 300;
        }
        return (
            <div>
                <Header />
                <CanvasContainer />
                <Footer viewChanged={(event) => this.deviceViewHandler(event)}/>
            </div>
        );
    }
}

export default PageLayout;


