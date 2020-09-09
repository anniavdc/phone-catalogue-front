import React from 'react';

// libraries
import {
    Route,
    Switch,
    Redirect,
    useHistory
} from 'react-router-dom';

// components
import PhoneListPage from './phones/PhoneListPage';
import PhoneDetail from './phones/PhoneDetail';

export default function Main({ match }) {
    let history = useHistory();

    return (
        <div className="main-page">
            <header className="main-header">
                <h1 className="main-title" onClick={() => history.push(match.path)}>Product app</h1>
            </header>
            <section className="main-content">
                <Switch>
                    <Route exact path={`${match.path}/:phoneId`} component={PhoneDetail} />
                    <Route exact path={match.path} component={PhoneListPage} />
                    <Redirect to={match.path} />
                </Switch>
            </section>
            <footer className="main-footer">
                by Annia da Costa Martins
            </footer>
        </div>
    )
}
