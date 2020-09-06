import { updateObject } from '../utility';
import {
    PHONE_LIST_START,
    PHONE_LIST_SUCCESS,
    PHONE_LIST_FAIL,
} from '../actions/actionTypes';

const initialState = {
    phoneList: [],
    error: null,
    networkError: null,
    loading: false,
};

const phoneListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        networkError: null,
    });
};

const phoneListSuccess = (state, action) => {
    return updateObject(state, {
        channelList: action.channelList,
        error: null,
        networkError: null,
        loading: false,
    })
};

const phoneListFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        networkError: action.networkError,
        loading: false,
    })
};

const phoneList = (state = initialState, action) => {
    switch (action.type) {
        case PHONE_LIST_START: return phoneListStart(state, action);
        case PHONE_LIST_SUCCESS: return phoneListSuccess(state, action);
        case PHONE_LIST_FAIL: return phoneListFail(state, action);
        default:
            return state
    }
};

export default phoneList;
