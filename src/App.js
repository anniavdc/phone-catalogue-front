import React from 'react';

// libraries
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// components
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={Main} />
        <Route exact path="/" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
