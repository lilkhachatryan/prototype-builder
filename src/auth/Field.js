import React from 'react';

const Field = ({errorText, hasError, labelText, name, ...props}) => {
    return (
        <div className='form-group'>
            <label className='field-label text-muted' htmlFor={name}>{labelText}</label>
            <input className='field-styling'
                   id={name}
                   name={name}
                   {...props}
            />
            {
                hasError &&
                <small className='text-danger'>
                    {errorText}
                </small>
            }
        </div>
    );
};

export default Field;
