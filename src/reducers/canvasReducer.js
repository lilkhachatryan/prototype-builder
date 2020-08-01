import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentElement: {},
    panningPosition: { x: 0, y: 0 }
};

const initialCanvasesState = {
    loading: false,
    loaded: false,
    error: '',
    canvases: []
};

const canvas = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT_OBJECT:
            return {
                ...state,
                currentElement: action.payload
            };
        case actionTypes.UPDATE_OBJECT:
            return {
                ...state,
                currentElement: action.payload
            };
        case actionTypes.UPDATE_GROUP_OBJECT:
            return {
                ...state,
                currentElement: action.payload,
            };
        case actionTypes.DELETE_OBJECT:
            return {
                ...state,
                currentElement: action.payload
            };
        case actionTypes.UPDATE_PANNING_POSITION:
            console.log(action.payload);
            return {
                ...state,
                panningPosition: action.payload
            };
        default:
            return state;
    }
};


export const canvases = (state = initialCanvasesState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CANVASES: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }
        case actionTypes.LOAD_CANVASES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                canvases: action.payload
            };
        }
        case actionTypes.LOAD_CANVASES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default: return state;
    }
};

export default canvas;
