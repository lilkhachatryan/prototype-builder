import React, {useRef} from 'react';
import {fabric} from 'fabric';

const AddImageURL = ({handleAdd}) => {
    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let value = ref.current.value;
        value = value.replace(/\s+/g, '');
        if (value){
            fabric.Image.fromURL(value, function (img) {
                ref.current.value = '';
                return handleAdd(img);
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} >
            <input
                ref={ref}
                placeholder='simply add the URL'
                type="text"/>
                <button className="primary" type='submit' >
                    Add image
                </button>
        </form>
    );
};

export default AddImageURL;
