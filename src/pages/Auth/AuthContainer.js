import React from 'react';
import './LoginStyles.scss';
import {returnToken } from "../../utils/helpers";
import { Redirect } from 'react-router-dom';

const AuthContainer = ({children}) => {
    if (returnToken()){
     return <Redirect to='/workspace' />;
    }
    return (
        <div className='auth__container'>
            {children}
        </div>
    );
};

export default AuthContainer;
