import React from 'react';

export default function ProductCard(props) {
    const {
        title,
        info,
        imageUrl,
        content
    } = props;

    return (
        <div className="product-card">
            <p className="card-info">{info}</p>
            <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div>
                <h3 className="card-title">{title}</h3>
                <p className="card-content">{content}</p>
            </div>
        </div>
    )
}
