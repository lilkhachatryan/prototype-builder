import React from 'react';
import './App.scss';
import { Home } from "./views";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export const Routes = Object.freeze({
  Root: '/',
  Home: '/home',
  NotFoundPage: '*'
});

const NotFound = ({ location }) => (
    <div>
      <strong>Error!</strong> No route found matching:
      <div>
        <code>{location.pathname}</code>
      </div>
    </div>
);

function App() {
  return (
      <Router>
          <Switch>
              <Route path={Routes.Home} component={Home} />
              <Route exact render={() => (
                  <Redirect to={Routes.Home} />
              )} />

              <Route path={Routes.NotFoundPage} component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
