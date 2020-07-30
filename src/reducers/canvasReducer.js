import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentElement: {},
    coords: {top: 0, left: 0}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT_OBJECT:
            return {
                currentElement: action.payload
            };
        case actionTypes.UPDATE_OBJECT:

            return {
                currentElement: action.payload
            };
        case actionTypes.DELETE_OBJECT:
            return {
                currentElement: action.payload
            };
        case actionTypes.MOVE_COORDS: {
            const coords = {...action.coords};
            return {
                ...state,
                coords: {top: coords.y, left: coords.x}
            };
        }
        default:
            return state;
    }
};

export default reducer;
