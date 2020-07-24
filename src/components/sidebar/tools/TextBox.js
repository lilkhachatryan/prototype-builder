import React from 'react';
import { fabric } from 'fabric';

const TextBox = ({ handleAdd }) => {
    const handleClick = () => {
        const textBox = new fabric.Textbox("Type your text here", {
            top: 30,
            left: 30,
            width: 200,
            fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: 25,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: '#FFFFFF',
            strokeWidth: 0,
            stroke: '#000000'
        });
        return handleAdd(textBox);
    };
    return (
        <button className="btn btn-light" onClick={handleClick}>
            Text
        </button>
    );
};


export default TextBox;
