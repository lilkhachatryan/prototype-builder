import { getStorage } from "../utils/storage";
import {Routes} from "../App";
import { notifyError } from "./notify";

const axios = require('axios').create({
    baseURL: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
});

axios.interceptors.request.use(config => {
    let accessToken = getStorage('localStorage', 'token'); // or sessionStorage
    if (accessToken) {
        config.headers['token'] = accessToken;
    }

    return config;
});

export const setupInterceptors = (history) => {
    axios.interceptors.response.use(res => res, e => {

        if (!e.response || !e.response.status)
            return Promise.reject(e);

        switch (e.response.status) {
            case 401:
                // history.push(Routes.Login);
                notifyError('Session expired');
                break;
            default: notifyError(e.response.data);
        }

        return Promise.reject(e);
    });
};

export default axios;
