import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// files
import ProductCard from './../../components/productCard/ProductCard';
import { phoneList } from './../../store/actions/index';

export default function PhoneListPage({ match }) {
    const phones = useSelector(state => state.phones);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(phoneList());
    }, [dispatch]);

    const handleProductClick = (id) => {
        history.push(`${match.path}/${id}`);
    };

    const baseURL = process.env.REACT_APP_API_BASE;
    return (
        <React.Fragment>
            <h2 className="products-title">Phone Catalogue</h2>
            <div className="products-wrapper">
                {phones.phoneList.map(phone =>
                    <ProductCard
                        key={phone.id}
                        title={phone.name}
                        content={phone.manufacturer}
                        info={`${phone.price}€`}
                        imageUrl={`${baseURL}/public/${phone.imageFileName}`}
                        onCardClick={() => handleProductClick(phone.id)}
                    />
                )}
            </div>
        </React.Fragment>
    )
}
