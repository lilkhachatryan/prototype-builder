import React, {lazy, Suspense} from 'react';
import './SettingsContainer.scss';
import CanvasSettings from './CanvasSettings';

const ButtonSettings = lazy(() => import('./ButtonSettings/ButtonSettings'));
const ShapeSettings = lazy(() => import('./ShapeSettings/ShapeSettings'));
const LineSettings = lazy(() => import('./LineSettings/LineSettings'));
const TextSettings = lazy(() => import('./TextSettings/TextSettings'));
const ShareIconsSettings = lazy(() => import('./ShareIconsSettings'));
const ImageSettings = lazy(() => import('./ImageSettings'));

// import ButtonSettings from './ButtonSettings/ButtonSettings';
// import ShapeSettings from './ShapeSettings/ShapeSettings';
// import LineSettings from './LineSettings/LineSettings';
// import TextSettings from './TextSettings/TextSettings';
// import ShareIconsSettings from './ShareIconsSettings';
// import ImageSettings from './ImageSettings';

export const Settings = Object.freeze({
    image: ImageSettings,
    button: ButtonSettings,
    textbox: TextSettings,
    rect: ShapeSettings,
    circle: ShapeSettings,
    triangle: ShapeSettings,
    line: LineSettings,
    shareIcons: ShareIconsSettings
});

class SettingsContainer extends React.Component {
    render() {
        const {currentElement, elementChange, groupElementChange} = this.props;
        let SettingsComponent = Settings[currentElement.type];

        if (!SettingsComponent) {
            return (
                <div className='settings-container'>
                    <CanvasSettings canvas={this.props.canvas}
                                    changeCanvasBg={this.props.changeCanvasBg}
                                    changeCanvasBgImage={this.props.changeCanvasBgImage}/>
                </div>
            );
        }

        return (
            <div className='settings-container'>
                <Suspense fallback={<div>Loading...</div>}>
                    <SettingsComponent
                        elementChange={elementChange}
                        currentElement={currentElement}
                        groupElementChange={groupElementChange}/>
                </Suspense>
                <hr className='dropdown-divider'/>
                <div>
                    <button className='settings-button btn' onClick={() => this.props.center('V')}>Center vertically
                    </button>
                    <button className='settings-button btn' onClick={() => this.props.center('H')}>Center horizontally
                    </button>
                    <button className='settings-button btn' onClick={this.props.bringToTop}>Bring forward</button>
                    <button className='settings-button btn' onClick={this.props.sendToBack}>Send back</button>
                </div>
            </div>
        );
    }
}


export default SettingsContainer;
