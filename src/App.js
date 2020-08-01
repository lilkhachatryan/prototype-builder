import React from 'react';
import './App.scss';
import {Authenticate} from "./pages/Authenticate";
import { ConnectedLogin, ConnectedRegister } from "./pages";
import AuthContainer from "./pages/auth/AuthContainer";
import {Switch, Route} from "react-router-dom";
import PageLayout from "./components/Layout/PageLayout";
import PageNotFound from "./pages/PageNotFound";



function App() {
  return (
      <Switch>
          <Route path={['/workspace']}>
              {
                  Authenticate(PageLayout)
              }
          </Route>
          <Route path={['/register', '/']}>
              <AuthContainer>
                  <Switch>
                      <Route path='/register' component={ConnectedRegister}/>
                      <Route path='/' exact component={ConnectedLogin}/>
                      <Route component={PageNotFound} />
                  </Switch>
              </AuthContainer>
          </Route>
      </Switch>
  );
}

export default App;
