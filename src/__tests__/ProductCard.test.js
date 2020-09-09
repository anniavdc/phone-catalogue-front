import React from 'react';
import { render } from '@testing-library/react';

// files
import ProductCard from './../components/productCard/ProductCard';

const initialProps = {
    title: "Galaxy 7",
    info: 59,
    imageUrl: "https://image.png",
    content: "Samsung",
    onCardClick: jest.fn()
}

describe('ProductCard', () => {
    test('render', () => {
        const { container } = render(
            <ProductCard {...initialProps} />
        );
        expect(container).toMatchSnapshot();
    });

})
