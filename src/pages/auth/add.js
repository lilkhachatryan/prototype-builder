import React from 'react';
import {createUserProfileDocument} from "../../firebase";
import {connect} from 'react-redux';

const Add = ({user}) => {
    function handleClick(){
        createUserProfileDocument(user, 'aasasasa').then(console.log);
    }
    return (
        <div>
            <button
                type='button'
                onClick={handleClick} >
                click
            </button>
        </div>
    );
};

export default connect( (state) => ({
    user: state.user.user
}) )(Add);







