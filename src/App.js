import React from 'react';

// libraries
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Redirect
} from 'react-router-dom';

// files
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const NotFoundPage = () => {
  const { pathname } = useLocation();
  return pathname === '/' ? <Redirect to="/app" /> : <NotFound />;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={Main} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
