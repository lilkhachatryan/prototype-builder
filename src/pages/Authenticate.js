import React from 'react';
import { withRouter } from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import CanvasContainer from "../components/CanvasContainer/CanvasContainer";
import { connect } from 'react-redux';

export function Authenticate(Component) {
    const AuthenticatedComponent = (props) => {
        if (!props.token){
            return <Redirect to='/login'/> ;
        }
        return (
            <Component>
                <Switch>
                    <Route path='/workspace' component={CanvasContainer}/>
                </Switch>
            </Component>
        );
    };

    const mapStateToProps = state => {
        return {
            token: state.login.token
        };
    };
    return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
}
