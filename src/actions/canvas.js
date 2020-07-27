// import {fabric} from "fabric";

export function changeCanvas (payload) {
    return {
        type: 'OBJECTS_CANVAS_CHANGE',
        payload
    };
}

export function objectChange (payload) {
    return {
        type: 'OBJECT_CANVAS_CHANGE',
        payload
    };
}

export function addCanvasObject (payload) {
    return {
        type: 'OBJECT_CANVAS_ADD',
        payload
    };
}

export function setActiveObject(payload) {
    return {
        type: 'SET_ACTIVE_OBJECT',
        payload
    };
}
