import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { PHONE_LIST_FAIL } from '../../../store/actions/actionTypes';
import { phoneList, phoneListFail } from '../../../store/actions/phoneList';

const phone = {
    color: "black",
    description: "This is iPhone 7.",
    id: 0,
    imageFileName: "IPhone_7.png",
    manufacturer: "Apple",
    name: "iPhone 7",
    price: 769,
    processor: "A10 Fusion",
    ram: 2,
    screen: "4,7 inch IPS"
};

const initialState = {
    phoneList: [],
    error: null,
    networkError: null,
    loading: false,
};

const apiResponse = {
    data: [
        phone,
        phone
    ]
};

const apiError = {
    response: {
        status: 422
    },
};

const networkError = {
    response: {
        status: 500
    },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('phoneList actions', () => {
    describe('async actions', () => {
        it('dispatches the correct actions on failed fetch request', () => {
            axios.get.mockImplementationOnce(() => Promise.reject(apiError));

            const expectedActions = [
                'PHONE_LIST_START',
                'PHONE_LIST_FAIL'
            ]

            const store = mockStore(initialState)

            return (
                store
                    .dispatch(phoneList())
                    .then(() => {
                        // return of async actions
                        const actualActions = store.getActions().map(action => action.type)
                        expect(actualActions).toEqual(expectedActions)
                    })
            )
        });

        it('dispatches the correct actions on success fetch request', () => {
            axios.get.mockImplementationOnce(() => Promise.resolve(apiResponse));

            const expectedActions = [
                'PHONE_LIST_START',
                'PHONE_LIST_SUCCESS'
            ]

            const store = mockStore(initialState)

            return (
                store
                    .dispatch(phoneList())
                    .then(() => {
                        // return of async actions
                        const actualActions = store.getActions().map(action => action.type)
                        expect(actualActions).toEqual(expectedActions)
                    })
            )
        });
    })
})