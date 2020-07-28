const initialState = {
    selectedObject: null
};

export default function canvas(state = initialState, { type, payload }) {
    switch (type) {
        case 'SET_ACTIVE_OBJECT':
            return {
                ...state,
                selectedObject: payload.selectedObject
            };
        case 'UPDATE_ACTIVE_OBJECT':
        {
            console.log('aaa', { ...state.selectedObject, ...payload.selectedObject});
            return {
                ...state,
                selectedObject: {
                    ...state.selectedObject,
                    ...payload.selectedObject
                }
            };
        }
        default: return state;
    }
}
