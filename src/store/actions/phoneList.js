import api from '../../api';

import { 
    PHONE_LIST_START,
    PHONE_LIST_SUCCESS,
    PHONE_LIST_FAIL,
} from './actionTypes';

export const phoneListStart = () => {
    return {
        type: PHONE_LIST_START
    }
};

export const phoneListSuccess = (phones) => {
    return {
        type: PHONE_LIST_SUCCESS,
        phoneList: phones,
    }
};

export const phoneListFail = (error) => {
    const errorStatus = error.response ? error.response.status : null
    return {
        type: PHONE_LIST_FAIL,
        error: errorStatus === 422 ? error : null,
        networkError: errorStatus >= 500 ? error : null
    }
};

export const phoneList = () => {
    return dispatch => {
        dispatch(phoneListStart());
        return api.get({ url: ['PHONE_LIST']})
        .then(res => {
            dispatch(phoneListSuccess(res.data));
        })
        .catch(e => {
            dispatch(phoneListFail(e));
        });
    }
};