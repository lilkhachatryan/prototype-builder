import Axios from "axios";
import {returnToken} from "../utils/storage";

const registerUserURL = 'https://prototype-builder-api.herokuapp.com/api/users/register';

export function registerService(newUser) {
    return Axios.post(registerUserURL, newUser);
}



