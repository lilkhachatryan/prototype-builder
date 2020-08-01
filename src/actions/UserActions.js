import * as fromActionTypes from './actionTypes';
import {registerService} from "../services/client";


// register user

export function registerUser() {
    return {
        type: fromActionTypes.REGISTER_USER
    };
}

export function registerUserSuccess() {
    return {
        type: fromActionTypes.REGISTER_USER_SUCCESS
    };
}

export function registerUserFail(payload) {
    return {
        type: fromActionTypes.REGISTER_USER_FAIL,
        payload
    };
}



export function handleRegisterUSer(newUser) {
    return (dispatch) => {
        dispatch(registerUser());
        return registerService(newUser).then( (response) => {
            dispatch(registerUserSuccess());
        } ).catch(err => {
            dispatch(registerUserFail(err.message));
        });
    };
}





