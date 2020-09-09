import React from 'react';

// files
import render from './../utils/tests/renderWithRouter';
import NotFound from '../pages/NotFound';

describe('NotFound', () => {
    test('render', () => {
        const { container } = render(
            <NotFound />
        );
        expect(container).toMatchSnapshot();
    });

})
