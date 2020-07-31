import firebase from "../firebase";


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
            console.log(response, 'response login');
        } );
    };
}
