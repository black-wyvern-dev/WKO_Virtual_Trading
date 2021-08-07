import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_ACCOUNT_REQUEST,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAIL,
} from 'src/actions/authAction';

const initialState = {
    user: {
        email: 'luckyman@hotmail.com',
        password: '',
    },
    is_authorized: false,
    is_busy: true,
    errors: {},
    loading: false,
    role: -1,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                errors: {},
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                is_authorized: true,
                is_busy: false,
                errors: {},
                role: action.payload.role,
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            sessionStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                is_authorized: false,
                user: {},
                is_busy: false,
                errors: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                is_busy: false,
                errors: {},
            }
        case UPDATE_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            }
        case UPDATE_ACCOUNT_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}