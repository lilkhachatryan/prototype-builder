import React from 'react';
import { returnToken } from "../utils/helpers";
import { withRouter } from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import CanvasContainer from "../components/CanvasContainer/CanvasContainer";
import { setupInterceptors } from "../plugins/axios";

export function Authenticate(Component) {
    class AuthenticatedComponent extends React.Component{
        componentDidMount() {
            // setupInterceptors(this.props.history);
        }

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
