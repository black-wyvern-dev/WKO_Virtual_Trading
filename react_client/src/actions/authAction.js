import axios from 'axios';
import { BASE_API_URL } from '../config';
import store from 'src/store';

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const UPDATE_ACCOUNT_REQUEST = "UPDATE_ACCOUNT_REQUEST"
export const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS"
export const UPDATE_ACCOUNT_FAIL = "UPDATE_ACCOUNT_FAIL"

export const doLogin = (dispatch, navigate, loginData) => {
    let postData = {
        email: loginData.email,
        password: loginData.password
    }
    dispatch({
        type: LOGIN_REQUEST,
    })
    axios.post(`${BASE_API_URL}api/member/login`, postData)
    .then(({data}) => {
        let { code, content, errors } = data;
        switch (code) {
            case 200:
                let user = {
                    email: content.email,
                    nickname: content.nickname,
                    role: content.role,
                    is_active: content.is_active,
                    is_superuser: content.is_superuser,
                    amazon_email: content.amazon_email,
                    bid: content.bid,
                    lastPropose: content.lastPropose,
                }
                setAxiosHeader(content.token)
                saveTokenSessionStorage(content.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user,
                });
                if (user.is_active) {
                    navigate('/playboard', {
                        replace: true 
                    });
                } else {
                    alert("Please contact the manager");
                }
                break;
            case 300:
                alert("Retype your infomation")
                break;
            case 401:
                alert("email or password is not matched")
                break;
            case 404:
                alert("Not registered")
                break;
            default:
                alert("Please contact the manager");
                dispatch({
                    type: LOGIN_FAIL,
                    payload: "Unknown Error"
                })
        }
    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Unknown Error"
        })
    });
}

export const doLogout = (dispatch, navigate) => {
    navigate('/', {
        replace: true 
    });
    dispatch({
        type: LOGIN_FAIL,
        payload: "Log out"
    });
}

export const doRegister = (dispatch, navigate, registerData) => {
    let postData = {
        nickname: registerData.nickname,
        email: registerData.email,
        password: registerData.password
    }
    dispatch({
        type: REGISTER_REQUEST,
    })
    axios.post(`${BASE_API_URL}api/member/register`, postData)
    .then(({data}) => {
        let { code, content, errors } = data;
        let msg = ""
        switch (code) {
            case 200:
                let user = {
                    email: registerData.email,
                    password: registerData.password,
                }
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: user,
                });
                navigate('/login', {
                    replace: true 
                });
                break;
            case 300:

                for (let key in errors) {
                    msg += errors[key]
                }
                alert(msg)
                dispatch({
                    type: REGISTER_FAIL,
                    payload: errors
                })
                break;
            case 400:
                for (let key in errors) {
                    msg += errors[key]
                }
                alert(msg)
                dispatch({
                    type: REGISTER_FAIL,
                    payload: errors
                })
                break;
            default:
                dispatch({
                    type: REGISTER_FAIL,
                    payload: "Unknown Error"
                })
        }
    }).catch(err => {
        dispatch({
            type: REGISTER_FAIL,
            payload: "Unknown Error"
        })
    });
}

export const getUserData = (dispatch) => {
    axios.get(`${BASE_API_URL}api/member/selfInfo`)
    .then(({data}) => {
        let { code, content, errors } = data;
        switch (code) {
            case 200:
                let user = {
                    email: content.email,
                    nickname: content.nickname,
                    role: content.role,
                    is_active: content.is_active,
                    amazon_email: content.amazon_email,
                    bid: content.bid,
                    lastPropose: content.lastPropose,
                }
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user,
                });
                break;
            case 400:
                break;
            default:
                dispatch({
                    type: LOGIN_FAIL,
                    payload: "Unknown Error"
                })
        }
    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Unknown Error"
        })
    });
}

export const updateAccount = (dispatch, userData) => {
    dispatch({
        type: UPDATE_ACCOUNT_REQUEST,
    })
    axios.post(`${BASE_API_URL}api/member/update`, userData)
    .then(({data}) => {
        let { code, errors } = data;
        switch (code) {
            case 200:
                let user = {
                    email: userData.email,
                    nickname: userData.nickname,
                    amazon_email: userData.amazon_email,
                }
                dispatch({
                    type: UPDATE_ACCOUNT_SUCCESS,
                    payload: user,
                });
                break;
            case 400:
                break;
            default:
                dispatch({
                    type: UPDATE_ACCOUNT_FAIL,
                    payload: "Unknown Error"
                })
        }
    }).catch(err => {
        dispatch({
            type: UPDATE_ACCOUNT_FAIL,
            payload: "Unknown Error"
        })
    });
}


const setAxiosHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        axios.defaults.headers.common['Authorization'] = "";
    }
}

const saveTokenSessionStorage = (token) => {
    sessionStorage.setItem('hacktoken', token);
}

if (sessionStorage.getItem('hacktoken')) {
    let token = sessionStorage.getItem('hacktoken');
    setAxiosHeader(token);
    setTimeout(() => getUserData(store.dispatch),500);
} else {
    setTimeout(() => {
        store.dispatch({
            type: LOGIN_FAIL,
            payload: "Please login",
        });
    })
}
