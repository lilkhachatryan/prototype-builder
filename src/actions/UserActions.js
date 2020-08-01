
import * as fromActionTypes from './actionTypes';


export function loginUserSuccess(payload) {
    return {
        type: fromActionTypes.LOGIN_USER_SUCCESS,
        payload
    };
}





export function registerUser(user) {
    return (dispatch) => {
        const {email, password} = user;
    };
}


export function login(userInfo) {
    const {email, password} = userInfo;
    return (dispatch) => {

    };
}
