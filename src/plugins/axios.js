import { notifyError } from "./notify";
import { returnToken, removeToken } from "../utils/helpers";
import { LOG_OUT } from "../actions/actionTypes";
import { handleUserLogOut } from "../actions/UserActions";

const axios = require('axios').create({
    baseURL: process.env.REACT_APP_API_URL
});

axios.interceptors.request.use(config => {
    let accessToken = returnToken();
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['token'] = `Bearer ${accessToken}`;
    }

    return config;
});


export const setupInterceptors = (store) => {
    axios.interceptors.response.use(res => res, e => {
        if (!e.response || !e.response.status)
            return Promise.reject(e);

        switch (e.response.status) {
            case 401:
                removeToken();
                // window.location.href = 'login';
                // history.push('/login');
                store.dispatch(handleUserLogOut());
                notifyError('Session expired');
                break;
            default: notifyError(e.response.data);
        }

        return Promise.reject(e);
    });
};

export default axios;
