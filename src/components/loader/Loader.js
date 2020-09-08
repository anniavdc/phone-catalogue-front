import React from 'react'

export default function Loader(props) {
    const { extraClass } = props;

    return (
        <div className={`loader ${extraClass}`} />            
    )
}
