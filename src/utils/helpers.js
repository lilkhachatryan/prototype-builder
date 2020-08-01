import { getStorage } from "./storage";

export function returnToken() {
    return getStorage('localStorage', 'token') || getStorage('sessionStorage', 'token');
}
