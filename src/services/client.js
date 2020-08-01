import Axios from "axios";
import {returnToken} from "../utils/storage";

const registerUserURL = 'https://prototype-builder-api.herokuapp.com/api/users/register';
const loginURL = 'https://prototype-builder-api.herokuapp.com/api/users/login';
const canvasesURL = 'https://prototype-builder-api.herokuapp.com/api/projects/list';
const loadCanvasWithIdURL = 'https://prototype-builder-api.herokuapp.com/api/projects';
const postCanvasURL = 'https://prototype-builder-api.herokuapp.com/api/projects';

export function registerService(newUser) {
    return Axios.post(registerUserURL, newUser);
}

export function loginUserService(user) {
    return Axios.post(loginURL, user);
}

export function loadCanvasesService() {
    const token = returnToken();
    console.log(token);
    return Axios.get(canvasesURL, {headers: {
            'Bearer': `${token}`
        }});
}

export function loadCanvasWithIdService(id) {
    const token = returnToken();
    return Axios.get(`${loadCanvasWithIdURL}/${id}`, {headers: {token}});
}

export function postCanvas(canvas) {
    const token = returnToken();
    return Axios.post(postCanvasURL, canvas, {headers: {
            'Authorization': `Bearer ${token}`
        }});
}





