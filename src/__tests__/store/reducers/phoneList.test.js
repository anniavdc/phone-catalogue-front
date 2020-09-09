import phoneList from '../../../store/reducers/phoneList';
import {
    PHONE_LIST_START,
    PHONE_LIST_SUCCESS,
    PHONE_LIST_FAIL,
} from '../../../store/actions/actionTypes';

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

const startState = {
    phoneList: [],
    error: null,
    networkError: null,
    loading: true,
};

const successState = {
    phoneList: [
        phone,
        phone
    ],
    error: null,
    networkError: null,
    loading: false,
};

const failState = {
    phoneList: [],
    error: 'error',
    networkError: undefined,
    loading: false,
};


describe('phoneList reducer', () => {
    it('should return the initial state', () => {
        expect(phoneList(undefined, {})).toEqual(initialState)
    });
    it('should handle PHONE_LIST_START', () => {
        expect(
            phoneList(initialState, {
                type: PHONE_LIST_START,
            })
        ).toEqual(startState)
    });

    it('should handle PHONE_LIST_SUCCESS', () => {
        expect(
            phoneList(initialState, {
                type: PHONE_LIST_SUCCESS,
                phoneList: [ phone, phone ],
            })
        ).toEqual(successState)
    });

    it('should handle PHONE_LIST_FAIL', () => {
        expect(
            phoneList(initialState, {
                type: PHONE_LIST_FAIL,
                error: 'error'
            })
        ).toEqual(failState)
    });
})