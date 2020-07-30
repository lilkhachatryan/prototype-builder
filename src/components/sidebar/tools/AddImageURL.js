import React, { useRef } from 'react';
import { fabric } from 'fabric';

const AddImageURL = ({ handleAdd }) => {
    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let value = ref.current.value;
        value = value.replace(/\s+/g, '');
        if (value) {
            fabric.Image.fromURL(value, function (img) {
                ref.current.value = '';
                return handleAdd(img);
            }, {
                borderColor: 'gray',
                borderDashArray: [4, 3],
                cornerColor: '#49f500',
                cornerSize: 11,
                cornerStyle: 'circle',
                transparentCorners: false,
                cornerStrokeColor: '#aaaaaa',
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} >
            <input
                ref={ref}
                placeholder='simply add the URL'
                type="text" />
            <button className="primary" type='submit' >
                Add image
                </button>
        </form>
    );
};

export default AddImageURL;
