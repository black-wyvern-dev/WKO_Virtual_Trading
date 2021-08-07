import axios from 'axios';
import { BASE_API_URL } from '../config';
import store from 'src/store';

export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST"
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS"
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL"

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST"
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS"
export const UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL"

export const UPDATE_PRODUCT_INFO_REQUEST = "UPDATE_PRODUCT_INFO_REQUEST"
export const UPDATE_PRODUCT_INFO_SUCCESS = "UPDATE_PRODUCT_INFO_SUCCESS"
export const UPDATE_PRODUCT_INFO_FAIL = "UPDATE_PRODUCT_INFO_FAIL"

export const doGetAllUsers = (dispatch) => {
    dispatch({
        type: GET_ALL_USERS_REQUEST,
    })
    axios.get(`${BASE_API_URL}api/member/getAllUsers`)
    .then(({data}) => {
        let {code, content, errors} = data;
        let data_server = JSON.parse(content)
        let users = []
        switch (code) {
            case 200:
                for (let i = 0; i < data_server.length; i ++) {
                    users.push({
                        id: data_server[i]['pk'],
                        email: data_server[i]['fields']['email'],
                        nickname: data_server[i]['fields']['nickname'],
                        is_active: data_server[i]['fields']['is_active'],
                        amazon_email: data_server[i]['fields']['amazon_email'],
                        role: data_server[i]['fields']['role'],
                        date_joined: data_server[i]['fields']['date_joined'],
                    })
                }
                dispatch({
                    type: GET_ALL_USERS_SUCCESS,
                    payload: users,
                })
                break;
            default:
                dispatch({
                    type: GET_ALL_USERS_FAIL,
                })  
        }
    }).catch(err => {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: "Unknown Error",
        });
    })
}
