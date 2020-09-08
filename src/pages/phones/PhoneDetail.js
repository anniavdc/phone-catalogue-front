import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// files
import Loader from './../../components/loader/Loader';
import { phoneList } from './../../store/actions/index';

export default function PhoneDetail() {
    const phones = useSelector(state => state.phones.phoneList);
    const dispatch = useDispatch();
    let { phoneId } = useParams();

    useEffect(() => {
        // if there is no phone data
        if (!phones.length) {
            dispatch(phoneList());
        }
    }, [phones, dispatch]);

    const baseURL = process.env.REACT_APP_API_BASE;
    const selectedPhone = phones.find(phone => phone.id === parseInt(phoneId));
    return (
        !selectedPhone
            ? (
                <Loader extraClass="page" />
            ) : (
                <React.Fragment>
                    <h2 className="products-title">Phone Details</h2>
                    <div className="detail-wrapper">
                        <div className="detail-image" style={{ backgroundImage: `url(${baseURL}/public/${selectedPhone.imageFileName})` }}></div>
                        <div className="detail-content">
                            <h3 className="detail-title">{selectedPhone.name}</h3>
                            <p>{selectedPhone.manufacturer || ''}</p>
                            <p>{selectedPhone.description || ''}</p>
                            <div className="detail-features">
                                <p>Features</p>
                                <p>{selectedPhone.screen || ''}</p>
                                <p>{selectedPhone.processor || ''}</p>
                                <p>{selectedPhone.ram || ''}</p>
                                <p><span className="detail-color" style={{ backgroundColor: selectedPhone.color || 'white' }}></span>{selectedPhone.color || ''}</p>
                                <p className="detail-price">Price: {selectedPhone.price}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
    )
}
