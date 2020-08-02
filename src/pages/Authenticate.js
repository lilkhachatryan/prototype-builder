import React from 'react';
import { returnToken } from "../utils/helpers";
import { withRouter } from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import CanvasContainer from "../components/CanvasContainer/CanvasContainer";
import { connect } from 'react-redux';

export function Authenticate(Component) {
    class AuthenticatedComponent extends React.Component{
        state = {
            isLoggedIn: !!this.props.token
        };

        componentDidMount() {
            console.log('componentDidMount this.props.token ======>', this.props.token);
            console.log('componentDidMount returnToken()', returnToken());

            // if (!this.props.token) {
            //     this.props.history.push('/login');
            // }
        }

        componentDidUpdate (prevProps) {
            console.log('this.props.token ======>', this.props.token);
            if (prevProps.token !== this.props.token) {
                // this.props.history.push('/login');
                // this.forceUpdate();
                this.setState({ isLoggedIn: !!this.props.token });
            }
        };

        render() {
            console.log('render returnToken', returnToken());
            console.log('render isLoggedIn', this.state.isLoggedIn);
            // if (!this.props.token) {
            //     return <Redirect to='/login'/> ;
            // }
            // if (!this.state.isLoggedIn){
            //     return <Redirect to='/login'/> ;
            // }
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

    const mapStateToProps = state => {
        return {
            token: state.login.token
        };
    };
    return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
}
