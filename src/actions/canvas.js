export function setActiveObject(payload) {
    return {
        type: 'SET_ACTIVE_OBJECT',
        payload
    };
}

export function updateActiveObject (payload) {
    return {
        type: 'UPDATE_ACTIVE_OBJECT',
        payload
    };
}

export function setCurrentElement(payload) {
    return (dispatch) => {
        dispatch(setActiveObject(payload));
    };
}

export function updateCurrentElement(payload) {
    return (dispatch) => {
        dispatch(updateActiveObject(payload));
    };
}
