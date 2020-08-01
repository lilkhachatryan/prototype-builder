import React from 'react';
import {returnToken} from "../utils/storage";
import { withRouter } from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import CanvasContainer from "../components/CanvasContainer/CanvasContainer";




export function Authenticate(Component) {
    class AuthenticatedComponent extends React.Component{
        render() {
            if (!returnToken()){
                return <Redirect to='/login'/> ;
            }
            return (
                <Component>
                    <Switch>
                        <Route path='/workspace' component={CanvasContainer}/>
                    </Switch>
                </Component>
            );
        }
    }
    return withRouter(AuthenticatedComponent);
}
