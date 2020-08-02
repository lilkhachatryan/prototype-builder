import { getStorage } from "./storage";

export function returnToken() {
    return getStorage('localStorage', 'token') || getStorage('sessionStorage', 'token');
}

export function removeToken() {
    window.localStorage.removeItem('token');
    window.sessionStorage.removeItem('token');
}
