import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// files
import ProductCard from './../../components/productCard/ProductCard';
import Loader from './../../components/loader/Loader';
import { phoneList } from './../../store/actions/index';

export default function PhoneListPage({ match }) {
    const phones = useSelector(state => state.phones.phoneList);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        // get or update phone data (in case there are new items to be displayed)
        dispatch(phoneList());
    }, [dispatch]);

    const handleProductClick = (id) => {
        history.push(`${match.path}/${id}`);
    };

    const baseURL = process.env.REACT_APP_API_BASE;
    return (
        !phones.length
            ? (
                <Loader extraClass="page" />
            ) : (
                <React.Fragment>
                    <h2 className="products-title">Phone Catalogue</h2>
                    <div className="products-wrapper">
                        {phones.map(phone =>
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
    )
}
