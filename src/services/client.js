import Axios from "axios";
import {returnToken} from "../utils/storage";

const registerUserURL = 'https://prototype-builder-api.herokuapp.com/api/users/register';
const loginURL = 'https://prototype-builder-api.herokuapp.com/api/users/login';

export function registerService(newUser) {
    return Axios.post(registerUserURL, newUser);
}

export function loginUserService(user) {
    return Axios.post(loginURL, user);
}





