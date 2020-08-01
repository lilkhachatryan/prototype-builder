import { warn } from './loger';
let memoryStorage = {};

export const setStorage = (storage, key, value) => {
    try {
        memoryStorage[key] = value;
        window[storage].setItem(key, value);
    } catch (e) {
        warn(`Error on setting storage by ${key} key!`);
    }
};

export const getStorage = (storage, key) => {
    try {
        return window[storage].getItem(key);
    } catch (e) {
        warn(`Error on getting storage by name ${key} (${e})`);
        return memoryStorage[key] || null;
    }
};

export const removeStorage = (storage, name) => {
    try {
        delete memoryStorage[name];
        window[storage].removeItem(name);
    } catch (error) {
        warn(`Error on removing storage by ${name} key!`);
    }
};

export const clearStorage = (storage) => {
    try {
        memoryStorage = {};
        window[storage].clear();
    } catch (e) {
        warn(`Error on clearing storage!`);
    }
};
