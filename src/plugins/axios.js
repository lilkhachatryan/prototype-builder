import { notifyError } from "./notify";
import { returnToken, removeToken } from "../utils/helpers";
import { handleTokenUpdate } from "../actions/UserActions";

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
                // history.push('/login');
                store.dispatch(handleTokenUpdate());
                notifyError('Session expired');
                break;
            default: notifyError(e.response.data);
        }

        return Promise.reject(e);
    });
};

export default axios;
