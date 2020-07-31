import firebase from "../firebase";
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
        return firebase.auth().createUserWithEmailAndPassword(email, password).then( (response) => {
            console.log(response, 'Response');
        } );
    };
}


export function login(userInfo) {
    const {email, password} = userInfo;
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then( (response) => {
            console.log(response);
            dispatch(loginUserSuccess(response.user));
        } );
    };
}
