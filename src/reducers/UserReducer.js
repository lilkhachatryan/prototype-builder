import * as fromActionTypes from '../actions/actionTypes';

const initialRegisterState = {
    loading: false,
    loaded: false,
    error: ''
};

const initialLoginState = {
    loading: false,
    loaded: false,
    error: '',
    token: null
};


export function register(state = initialRegisterState, action) {
    switch (action.type) {
        case fromActionTypes.REGISTER_USER: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: ''
            };
        }
        case fromActionTypes.REGISTER_USER_SUCCESS: {
            return {
                loading: false,
                loaded: true,
                error: ''

            };
        }
        case fromActionTypes.REGISTER_USER_FAIL: {
            return {
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default : return state;
    }
}


export function login(state = initialLoginState, action) {
   switch (action.type) {
       case fromActionTypes.LOGIN_USER: {
           return {
               ...state,
               loading: true,
               loaded: false,
               error: '',
               token: null
           };
       }
       case fromActionTypes.LOGIN_USER_SUCCESS: {
           return {
               loading: false,
               loaded: true,
               error: '',
               token: action.payload
           };
       }
       case fromActionTypes.LOGIN_USER_FAIL: {
           return {
               loading: false,
               loaded: false,
               error: action.payload,
               token: null
           };
       }
       default : return state;
   }
}
