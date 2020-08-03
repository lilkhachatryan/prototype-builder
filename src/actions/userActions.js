import * as fromActionTypes from './actionTypes';
import { registerService } from "../services/client";
import { loginUserService } from "../services/client";
import { setStorage } from "../utils/storage";
import { removeToken } from "../utils/helpers";

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



export function handleRegisterUser(newUser, scb, fcb) {
    return (dispatch) => {
        dispatch(registerUser());
        return registerService(newUser).then( (response) => {
            dispatch(registerUserSuccess());
            scb();
        } ).catch(err => {
            dispatch(registerUserFail(err.message));
            fcb();
        });
    };
}


// Login user

export function loginUser() {
    return {
        type : fromActionTypes.LOGIN_USER
    };
}

export function loginUserSuccess(payload) {
    return {
        type: fromActionTypes.LOGIN_USER_SUCCESS,
        payload
    };
}

export function loginUserFail(payload) {
    return {
        type: fromActionTypes.LOGIN_USER_FAIL,
        payload
    };
}

export function logoutSuccess(payload) {
    return {
        type: fromActionTypes.LOG_OUT,
        payload
    };
}

export function handleLoginUser(user, cb, scb, rememberMe) {
    return (dispatch) => {
        dispatch(loginUser());
        return loginUserService(user).then( (response) => {
            const {token} = response.data;
            rememberMe ? setStorage('localStorage', 'token', token) : setStorage('sessionStorage', 'token', token);
            dispatch(loginUserSuccess(token));
            cb();
            scb();
        } ).catch(err => {
            cb();
            dispatch(loginUserFail(err.message));
        } );
    };
}

export function handleUserLogOut(cb) {
    return (dispatch) => {
        removeToken();
        dispatch(logoutSuccess());
        cb();
    };
}

export function handleTokenUpdate(token = null) {
    return (dispatch) => {
        dispatch(logoutSuccess(token));
    };
}





