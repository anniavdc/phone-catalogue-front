import React from 'react';
import { useSelector } from 'react-redux';

export default function PhoneDetail() {
    const phones = useSelector(state => state.phones);

    return (
        <div>
            PhoneDetail
        </div>
    )
}
