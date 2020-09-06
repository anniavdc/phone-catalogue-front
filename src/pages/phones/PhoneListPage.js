import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// files
import ProductCard from './../../components/productCard/ProductCard';
import { phoneList } from './../../store/actions/index';

export default function PhoneListPage() {
    const phones = useSelector(state => state.phones);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneList());
    }, [dispatch]);

    const baseURL = process.env.REACT_APP_API_BASE;

    return (
        <div className="products-wrapper">
            {phones.phoneList.map(phone =>
                <ProductCard
                    key={phone.id}
                    title={phone.name}
                    content={phone.manufacturer}
                    info={`${phone.price}€`}
                    imageUrl={`${baseURL}/public/${phone.imageFileName}`}
                />
            )}
        </div>
    )
}
