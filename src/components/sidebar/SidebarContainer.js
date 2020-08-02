import React, { Fragment, Suspense, lazy } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

// import Triangle from './tools/Triangle';
import ButtonCustom from './tools/Button';
import Circle from './tools/Circle';
import ConnectedCanvasesList from "./CanvasesList";
import Divider from './tools/Divider';
import Footer from './tools/Footer';
import Header from './tools/Header';
import Input from './tools/Input';
import Rect from './tools/Rect';
import ShareIcons from './tools/ShareIcons';
import TextBox from './tools/TextBox';
import UploadImage from './tools/UploadImage/UploadImage';

import './Sidebar.scss';
import 'font-awesome/css/font-awesome.min.css';

class SidebarContainer extends React.Component {
    render() {
        const {handleAdd} = this.props;
        return (
            <div className='sidebarWrapper'>
                <div className='sidebarWrapper__content'>
                    <div>
                        <h4>Team Add Objects</h4>
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Toggle as={Button} className='accordion-button' variant='link' eventKey='0'>
                                <i className='fa fa-columns' aria-hidden='true'/>
                                Layout
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0' className='accordion-collapse'>
                                <Fragment>
                                    <Header handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                    <Footer handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                </Fragment>
                            </Accordion.Collapse>
                        </Accordion>
                        <Accordion>
                            <Accordion.Toggle as={Button} className='accordion-button' variant='link' eventKey='1'>
                                <i className='fa fa-text-width' aria-hidden='true'/>
                                Wording
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='1' className='accordion-collapse'>
                                <Fragment>
                                    <TextBox handleAdd={handleAdd} fontSize='32' name='Heading'
                                             panningPosition={this.props.panningPosition}/>
                                    <TextBox handleAdd={handleAdd} fontSize='24' name='Subheading'
                                             panningPosition={this.props.panningPosition}/>
                                    <TextBox handleAdd={handleAdd} fontSize='16' name='Text'
                                             panningPosition={this.props.panningPosition}/>
                                </Fragment>
                            </Accordion.Collapse>
                        </Accordion>
                        <Accordion>
                            <Accordion.Toggle as={Button} className='accordion-button' variant='link' eventKey='2'>
                                <i className='fa fa-circle-o' aria-hidden='true'/>
                                Geometric figures
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='2' className='accordion-collapse'>
                                <Fragment>
                                    <Rect handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                    {/* <Triangle handleAdd={handleAdd} /> */}
                                    <Circle handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                </Fragment>
                            </Accordion.Collapse>
                        </Accordion>
                        <Accordion>
                            <Accordion.Toggle as={Button} className='accordion-button' variant='link' eventKey='3'>
                                <i className='fa fa-bars' aria-hidden='true'/>
                                Additional items
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='3' className='accordion-collapse'>
                                <Fragment>
                                    <Divider handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                    <Input handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                    <ButtonCustom handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                    <ShareIcons handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                                </Fragment>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <UploadImage handleAdd={handleAdd} panningPosition={this.props.panningPosition}/>
                    <ConnectedCanvasesList
                        currentlyEditingCanvasId={this.props.currentlyEditingCanvasId}
                        handleLoadCanvas={this.props.handleLoadCanvas}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        panningPosition: state.canvas.panningPosition
    };
};

export default connect(mapStateToProps)(SidebarContainer);
