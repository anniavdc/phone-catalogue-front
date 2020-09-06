import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { phoneList } from './../../store/actions/index';

export default function PhoneListPage() {
    const phones = useSelector(state => state.phones);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneList());
    }, [dispatch]);

    return (
        <div>
            {phones.phoneList.map(phones => phones.name)}
        </div>
    )
}
