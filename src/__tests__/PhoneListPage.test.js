import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// files
import render from '../utils/tests/renderWithRouter';
import PhoneListPage from '../pages/phones/PhoneListPage';
import { fireEvent } from '@testing-library/dom';

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

describe('PhoneListPage', () => {
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    test('render', async () => {
        const { container } = render(
            <Provider store={store}>
                <PhoneListPage match={{ params: { }, isExact: true, path: "/app", url: "/app" }} />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    test('it should redirect to detail', async () => {
        const { container, history } = render(
            <Provider store={store}>
                <PhoneListPage match={{ params: { }, isExact: true, path: "/app", url: "/app" }} />
            </Provider>,
            "/app",
            { wrapper: MemoryRouter }
        );
        const productCard = container.querySelector('.product-card');
        fireEvent.click(productCard);

        await expect(history.location.pathname).toMatch(/0/);
    });

})
