import React from 'react';
import {returnToken} from "../utils/storage";
import { withRouter } from 'react-router';
import {Route, Switch} from 'react-router-dom';
import CanvasContainer from "../components/CanvasContainer/CanvasContainer";




export function Authenticate(Component) {
    class AuthenticatedComponent extends React.Component{
        componentDidMount() {
            if (!returnToken()){
                this.props.history.push('/');
            }
        }
        render() {
            if (!returnToken()){
                return null;
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
