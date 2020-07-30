import * as actionTypes from './actionTypes';

export const updateElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();
    newCurrentElement.set({ ...obj });
    canvas.renderAll();

    return {
        type: actionTypes.UPDATE_OBJECT,
        payload: newCurrentElement.toObject()
    };
};

export const updateCurrentObject = (obj) => {
    return {
        type: actionTypes.UPDATE_CURRENT_OBJECT,
        payload: obj
    };
};

export const deleteObject = (canvas, obj) => {
    // const activeObj = canvas.getObjects().find(el => el.id === obj.id);
    const activeObj = canvas.getActiveObject();
    console.log(activeObj);
    canvas.remove(activeObj);

    return {
        type: actionTypes.DELETE_OBJECT,
        payload: {}
    };
};

export const moveCoords = (coords) => {
    return {
        type: actionTypes.MOVE_COORDS,
        coords
    };
};

