import React from 'react';
import {Link} from 'react-router-dom';

const Account = ({children, linkText, pathToNavigate}) => {
    return (
        <div className='field-info-link'>
            <Link to={pathToNavigate}>
                {linkText}
            </Link>
            {children}
        </div>
    );
};

export default Account;
