import './Footer.scss';
import React from 'react';
import {Icon} from 'react-svg-library';

const FooterContainer = (props) => {
    return (
        <div className='footer-container d-flex justify-content-between align-items-center'>
            <div className='footer-container__team-resources d-flex'>
                <div>
                    <span className='footer-container__member'>Armen Petrosyan</span>
                    <a href='https://github.com/armen558' target='_blank' rel="noopener noreferrer">
                        <Icon icon='github' size='1.5em'/>
                    </a>
                    <a href='https://www.linkedin.com/in/armen558/' target='_blank' rel="noopener noreferrer">
                        <Icon icon='linkedin-one' size='1.5em'/>
                    </a>
                </div>
                <div>
                    <span className='footer-container__member'>Lilit Khachatryan</span>
                    <a href='https://github.com/Lilkhachatryan' target='_blank' rel="noopener noreferrer">
                        <Icon icon='github' size='1.5em'/>
                    </a>
                    <a href='https://www.linkedin.com/in/lilit-khachatryan-25a919197/' target='_blank' rel="noopener noreferrer">
                        <Icon icon='linkedin-one' size='1.5em'/>
                    </a>
                </div>
                <div>
                    <span className='footer-container__member'>Vardges Mushegyan</span>
                    <a href='https://github.com/vardges-musheghyan' target='_blank' rel="noopener noreferrer">
                        <Icon icon='github' size='1.5em'/>
                    </a>
                    <a href='http://linkedin.com/in/vardges-musheghyan-a462b9154' target='_blank' rel="noopener noreferrer">
                        <Icon icon='linkedin-one' size='1.5em'/>
                    </a>
                </div>
                <div>
                    <span className='footer-container__member'>Aleksandr Martirosyan</span>
                    <a href='https://github.com/al-mart' target='_blank' rel="noopener noreferrer">
                        <Icon icon='github' size='1.5em'/>

                    </a>
                    <a href='https://www.linkedin.com/in/aleksandr-martirosyan/' target='_blank' rel="noopener noreferrer">
                        <Icon icon='linkedin-one' size='1.5em'/>
                    </a>
                </div>
            </div>
            <div className='footer-container__icons-container d-flex align-items-center'>
                <span>Toggle Canvas View</span>
                <div className='footer-icons-container d-flex'>
                    <div className='footer-icons-container-item' onClick={() => props.viewChanged(true)}>
                        <Icon icon='website' size='2em'/>
                    </div>
                    <div className='footer-icons-container-item' onClick={() => props.viewChanged(false)}>
                        <Icon icon='phone' size='2em'/>
                    </div>
                </div>
                <span>© 2020 Copyright: Add Objects Team</span>
            </div>
            <div className='footer-container__team-resources d-flex'>
                <div className='footer-container__links-container d-flex align-items-center'>
                    <a href='https://reactjs.org/docs/getting-started.html' target='_blank'
                       rel='noopener noreferrer'>React</a>
                    <a href='https://fontawesome.com/' target='_blank'
                       rel='noopener noreferrer'>Font Awesome</a>
                    <a href='https://github.com/axios/axios' target='_blank'
                       rel='noopener noreferrer'>Axios</a>
                    <a href='http://fabricjs.com/' target='_blank'
                       rel='noopener noreferrer'>Fabric</a>
                </div>
            </div>
        </div>
    );
};

export default FooterContainer;
