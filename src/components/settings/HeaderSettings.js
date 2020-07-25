import React from 'react';
import { HeaderSettingsWrapper } from "../../assets/styles/HeaderSettingsWrapper.style";
import UndoAndRedo from "./settings/undoAndRedo/UndoAndRedo";
import PanningMode from "./settings/panningMode/PanningMode";

const HeaderSettings = ({
    currentElement,
    handleRemove,
    handleUndoAndRedo,
    panningMode,
    handlePanningMode
}) => {
    return (
        <HeaderSettingsWrapper>
            <UndoAndRedo handleUndoAndRedo={handleUndoAndRedo} />
            <PanningMode
                panningMode={panningMode}
                handlePanningMode={handlePanningMode} />
            <button
                disabled={!Object.keys(currentElement).length > 0}
                className="btn btn-danger"
                onClick={() => handleRemove(this.props.currentElement)}
            >Delete</button>
            <button className="btn btn-primary" onClick={this.props.bringToTop}>Bring forward</button>
            <button className="btn btn-primary" onClick={() => this.props.center('H')}>Center horizontally</button>
            <button className="btn btn-primary" onClick={() => this.props.center('V')}>Center vertically</button>
        </HeaderSettingsWrapper>
    );
};

export default HeaderSettings;
