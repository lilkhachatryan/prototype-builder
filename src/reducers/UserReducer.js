import * as fromActionTypes from '../actions/actionTypes';



const initialState = {
    user: {},
    canvas: []
};




export function user(state = initialState, action) {
    switch (action.type) {
        case fromActionTypes.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        default: return state;
    }
}
