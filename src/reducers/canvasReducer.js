const initialState = {
    currentElement: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_OBJECT':
            return {
                currentElement: action.payload
            }
        case 'UPDATE_ELEMENT':

            return {
                currentElement: action.payload
            }
        case 'DELETE_OBJECT':
            return {
                currentElement: action.payload
            };
        default:
            return state
    }
}

export default reducer;
