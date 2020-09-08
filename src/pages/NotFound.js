import React from 'react';
import { Link } from 'react-router-dom';

// files
import searchIcon from './../assets/search-icon.png'

export default function NotFound() {
    return (
        <div className="not-found-wrapper">
            <div className="not-found-icon-wrapper">
                <img src={searchIcon} alt="not found icon" className="search-icon" />
                <p className="code">404</p>
            </div>
            <div className="not-found-content">
                <p>Página no encontrada</p>
                <p>Lo sentimos. No hemos podido encontrar la página que estás buscando</p>
            </div>
            <Link className="link" to="/app">
                Ir a página principal
            </Link>
        </div>
    )
}
