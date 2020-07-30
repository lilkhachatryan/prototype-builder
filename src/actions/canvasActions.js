import * as actionTypes from './actionTypes';

export const updateElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();
    newCurrentElement.set({ ...obj });
    canvas.renderAll();

    return {
        type: actionTypes.UPDATE_OBJECT,
        payload: newCurrentElement.toObject()
    }
}
export const updateGroupElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();
    newCurrentElement.forEachObject(el => el.set({ ...obj }));
    if (obj.fill) {
        newCurrentElement.fillName = obj.fill;
    }
    if(obj.colors) {
        newCurrentElement.colors = obj.colors;
    }
    canvas.renderAll();
    console.log(newCurrentElement.toObject(['colors', 'fillName']))
    return {
        type: actionTypes.UPDATE_GROUP_OBJECT,
        payload: newCurrentElement.toObject(['colors', 'fillName'])
    }
}


export const updateCurrentObject = (obj) => {
    return {
        type: actionTypes.UPDATE_CURRENT_OBJECT,
        payload: obj
    }
}

export const deleteObject = (canvas, obj) => {
    // const activeObj = canvas.getObjects().find(el => el.id === obj.id);
    const activeObj = canvas.getActiveObject();
    canvas.remove(activeObj);

    return {
        type: actionTypes.DELETE_OBJECT,
        payload: {}
    }
}