import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentElement: {},
    panningPosition: { x: 0, y: 0 }
};

const reducer = (state = initialState, action) => {
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
            }
        case actionTypes.UPDATE_GROUP_OBJECT:
            return {
                ...state,
                currentElement: action.payload,
            }
        case actionTypes.DELETE_OBJECT:
            return {
                ...state,
                currentElement: action.payload
            };
        case actionTypes.UPDATE_PANNING_POSITION:
            console.log(action.payload)
            return {
                ...state,
                panningPosition: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
