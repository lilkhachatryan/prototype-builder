import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Rects } from '../../assets/images/rects.svg';
import gifSrc from '../../assets/images/projectGif.gif';

import './Home.scss';

const Home = props => {
    return (
        <div className="homepage">
            <div className="container">
                <div className="headingContainer">
                    <h1>Best design tool for websites</h1>
                    <h3>Simple. Powerful. Flexible. Experience the power of 100% visual design.</h3>
                    <Rects />
                </div>
                <div className="imgContainer">
                    <img src={gifSrc} alt="gif" />
                </div>
                <div className="btnContainer">
                    <Link className="btn" to="/workspace">Get started</Link>
                    {props.token ? null : <Link className="btn" to="/login">Log in</Link>}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.login.token
    }
}

export default connect(mapStateToProps)(Home);
