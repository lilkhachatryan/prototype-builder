import React from 'react';
import './LoginStyles.scss';

const AuthContainer = ({children}) => {
    return (
        <div className='auth__container'>
            {children}
        </div>
    );
};

export default AuthContainer;
