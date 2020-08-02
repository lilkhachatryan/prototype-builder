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
        case actionTypes.POST_CANVAS_SUCCESS: {
            return {
                ...state,
                canvases: [...state.canvases, action.payload]
            };
        }
        case actionTypes.UPDATE_CANVAS_SUCCESS: {
            return {
                ...state,
                canvases: state.canvases.map(c => c._id === action.payload._id ? action.payload : c)
            };
        }
        case actionTypes.DELETE_CANVAS_WITH_ID_SUCCESS: {
            return {
                ...state,
                canvases: state.canvases.filter(c => c._id !== action.payload)
            };
        }
        default: return state;
    }
};

export default canvas;
