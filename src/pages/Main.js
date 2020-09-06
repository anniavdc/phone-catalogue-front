import React from 'react';

// libraries
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// components
import PhoneListPage from './phones/PhoneListPage';
import PhoneDetail from './phones/PhoneDetail';

export default function Main({ match }) {
    return (
        <div className="main-page">
            <header className="main-header">
                <h1 className="main-title">Product app</h1>
            </header>
            <section className="main-content">
                <Router>
                    <Switch>
                        <Route exact path={`${match.path}/:phoneId`} component={PhoneDetail} />
                        <Route exact path={match.path} component={PhoneListPage} />
                        <Redirect to={match.path} />
                    </Switch>
                </Router>
            </section>
            <footer className="main-footer">
                by Annia da Costa Martins
            </footer>
        </div>
    )
}
