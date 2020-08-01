import React from 'react';
import './App.scss';
import {Authenticate} from "./pages/Authenticate";
import { ConnectedLogin, ConnectedRegister } from "./pages";
import AuthContainer from "./pages/auth/AuthContainer";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import PageLayout from "./components/Layout/PageLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
      <Switch>
          <Route path={['/workspace']}>
              {
                  Authenticate(PageLayout)
              }
          </Route>
          <Route path={['/register', '/login', '/']}>
              <AuthContainer>
                  <Switch>
                      <Route path='/register' exact component={ConnectedRegister}/>
                      <Route path='/login' exact component={ConnectedLogin}/>
                      <Route exact path='/' component={Home}/>
                      <Route component={PageNotFound} />
                  </Switch>
              </AuthContainer>
          </Route>
      </Switch>
  );
}

export default App;
