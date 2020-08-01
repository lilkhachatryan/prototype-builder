import './Header.scss';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <div className='app-header'>
            <header className='app-header__headings'>
                <h1 className='app-header__headings-item'>Prototype Builder</h1>
                <NavDropdown title={
                    <div>
                        <img
                            src='https://i.stack.imgur.com/l60Hf.png'
                            alt='user pic' className='user-avatar'/>
                    </div>
                } id='basic-nav-dropdown'>
                    <NavDropdown.Item>
                        Canvas 1
                    </NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item>
                        Canvas 2
                    </NavDropdown.Item>
                </NavDropdown>
            </header>
        </div>
    );
};

export default Header;
