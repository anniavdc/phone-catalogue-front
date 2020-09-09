import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { waitForDomChange } from '@testing-library/dom';

// files
import render from '../utils/tests/renderWithRouter';
import PhoneDetail from '../pages/phones/PhoneDetail';

const initialState = {
    phones: {
        phoneList: [
            {
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
            }
        ]
    }
};

const mockStore = configureStore([thunk]);

describe('PhoneDetail', () => {
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    test('render', async () => {
        const { container } = render(
            <Provider store={store}>
                <PhoneDetail match={{ params: { phoneId: "0" }, isExact: true, path: "/app/:phoneId", url: "/app/0" }} />
            </Provider>,
            "/app/0",
            { wrapper: MemoryRouter }
        );
        expect(container).toMatchSnapshot();
    });

})
