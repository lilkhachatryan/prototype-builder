import React from 'react';
import Header from './Header/Header';
import CanvasContainer from '../CanvasContainer/CanvasContainer';

class PageLayout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <CanvasContainer/>
            </div>
        );
    }
}

export default PageLayout;


