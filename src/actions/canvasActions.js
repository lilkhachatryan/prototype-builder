export const updateElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();
    newCurrentElement.set({ ...obj });
    canvas.renderAll();

    return {
        type: 'UPDATE_ELEMENT',
        payload: newCurrentElement.toObject()
    }
}

export const updateCurrentObject = (obj) => {
    return {
        type: 'UPDATE_CURRENT_OBJECT',
        payload: obj
    }
}

export const deleteObject = (canvas, obj) => {
    const activeObj = canvas.getObjects().find(el => el.id === obj.id);
    console.log(activeObj)
    canvas.remove(activeObj);

    return {
        type: 'DELETE_OBJECT',
        payload: {}
    }
}