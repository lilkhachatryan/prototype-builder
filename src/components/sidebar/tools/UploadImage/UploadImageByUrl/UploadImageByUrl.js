import {fabric} from 'fabric';
import React, {useRef} from 'react';

import './UploadImageByUrl.scss';

const UploadImageByUrl = ({handleAdd}) => {
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
                stroke: '#FFFFFF',
                strokeWidth: 0,
                borderColor: 'gray',
                borderDashArray: [4, 3],
                cornerColor: '#49f500',
                cornerSize: 11,
                cornerStyle: 'circle',
                transparentCorners: false,
                cornerStrokeColor: '#aaaaaa',
                scaleX: 0.3,
                scaleY: 0.3,
            });
        }
    };

    return (
        <form className='formWrapper d-flex justify-content-center align-items-center' onSubmit={handleSubmit} >
            <input className='formWrapper__input'
                ref={ref}
                placeholder='URL...'
                type='text'/>
                <button className='formWrapper__button btn' type='submit'>
                    ADD
                </button>
        </form>
    );
};

export default UploadImageByUrl;
