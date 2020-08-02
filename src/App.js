import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import {Authenticate} from "./pages/Authenticate";
import ConnectedLogin from "./pages/auth/Login";
import ConnectedRegister from "./pages/auth/Register";
import AuthContainer from "./pages/auth/AuthContainer";
import PageLayout from "./components/Layout/PageLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home/Home";

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
