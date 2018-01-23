import {
    SET_EMAIL,
    SET_PASSWORD,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
    email: 'test@test.com',
    password: '123456',
    user: null,
    error: '',
    loading: false
};
export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case SET_EMAIL:
            return { ...state, email: action.data };
        case SET_PASSWORD:
            return { ...state, password: action.data };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.user };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        default:
            return state;
    }
}