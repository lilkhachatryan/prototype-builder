import React from 'react';
import './App.scss';
import { Workspace, ConnectedLogin, ConnectedRegister } from "./pages";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export const Routes = Object.freeze({
  Root: '/',
  Workspace: '/workspace',
  Login: '/login',
  Register: '/register',
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
              <Route path={Routes.Workspace} component={Workspace} />
              <Route path={Routes.Login} component={ConnectedLogin} />
              <Route path={Routes.Register} component={ConnectedRegister} />
              <Route exact render={() => (
                  <Redirect to={Routes.Workspace} />
              )} />
              <Route path={Routes.NotFoundPage} component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
