import _ from 'lodash';

const initialState = {
    canvasObject: {
        objects: [],
        background: '#fff'
    },
    selectedObjectId: null
};

export default function canvas(state = initialState, { type, payload }) {
    switch (type) {
        case 'OBJECTS_CANVAS_CHANGE':
            return {
                ...state,
                canvasObject: payload.canvasObject,
                selectedObjectId: payload.selectedObjectId
            };
        case 'OBJECT_CANVAS_CHANGE': {
            let newCanvasObject = _.cloneDeep(state.canvasObject);
            newCanvasObject.objects = newCanvasObject.objects.map(obj => obj.id === state.selectedObjectId ? { ...obj, ...payload.selectedObject} : obj);
            console.log('newCanvasObject.objects', newCanvasObject.objects);
            return {
                ...state,
                canvasObject: newCanvasObject
            };
        }
        case 'SET_ACTIVE_OBJECT':
            return {
                ...state,
                selectedObjectId: payload.id
            };
        case 'OBJECT_CANVAS_ADD':
            return {
                ...state,
                canvasObject: {
                    ...state.canvasObject,
                    objects: [...state.canvasObject.objects, payload.newObj]
                },
                selectedObjectId: payload.newObj.id
            };
        default: return state;
    }
}
