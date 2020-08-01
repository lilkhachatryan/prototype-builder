import React from 'react';

const AuthContainer = ({children}) => {
    return (
        <div className='auth__container' >
        {children}
        </div>
    );
};

export default AuthContainer;
