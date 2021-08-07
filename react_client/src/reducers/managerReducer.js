import { 
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
} from 'src/actions/managerActions';

import {
    UPDATE_USER_ROLE
} from 'src/dev/components/CustomerListResults';

const initialState = {
    users: [],
    loading: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
            break;
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
            break;
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: true,
            };
            break;
        case UPDATE_USER_ROLE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.payload.id) {
                        return ({
                            ...user,
                            role: action.payload.role,
                        })
                    } else {
                        return ({ ...user})
                    }
                })
            };
            break;
        default:
            return state;
    }
}