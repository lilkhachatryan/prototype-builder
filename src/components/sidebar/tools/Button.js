import React from 'react';
import { fabric } from 'fabric';
import { SidebarItem } from "../../../assets/styles/SidebarItem.style";


const Button = ({ handleAdd, panningPosition }) => {
    const defaultPadding = {
        top: 5,
        right: 25,
        bottom: 5,
        left: 25
    };

    const handleClick = () => {
        const text = new fabric.IText("Submit", {
            originX: 'center',
            originY: 'center',
            // fill: "#000000",
            fontFamily: 'Times New Roman',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            textBackgroundColor: '#FFFFFF',
            strokeWidth: 0,
            stroke: '#000000'
        });

        let textWidth = Math.ceil(text.calcTextWidth());
        let textHeight = Math.ceil(text.calcTextHeight());
        let rectWidth = textWidth + defaultPadding.right + defaultPadding.right;
        let rectHeight = textHeight + defaultPadding.top + defaultPadding.bottom;

        const rect = new fabric.Rect({
            width: rectWidth,
            height: rectHeight,
            originX: 'center',
            originY: 'center',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeWidth: 1,
            rx: 0,
            ry: 0,
            strokeUniform: true,
        });

        let button = new fabric.Group([rect, text], {
            type: 'button',
            left: -panningPosition.x + 100,
            top: -panningPosition.y + 100,
            borderColor: 'gray',
            borderDashArray: [4, 3],
            cornerColor: '#49f500',
            cornerSize: 11,
            cornerStyle: 'circle',
            transparentCorners: false,
            cornerStrokeColor: '#aaaaaa',
        });
        handleAdd(button);


        //  let LabeledRect = fabric.util.createClass(fabric.Rect, {
        //
        //      type: 'labeledRect',
        //
        //      initialize: function(options) {
        //          options || (options = { });
        //
        //          this.callSuper('initialize', options);
        //          this.set('label', options.label || '');
        //      },
        //
        //      toObject: function() {
        //          return fabric.util.object.extend(this.callSuper('toObject'), {
        //              label: this.get('label')
        //          });
        //      },
        //
        //      _render: function(ctx) {
        //          this.callSuper('_render', ctx);
        //
        //          ctx.font = '20px Helvetica';
        //          ctx.fillStyle = '#333';
        //          ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
        //      }
        //  });
        //  let labeledRect = new LabeledRect({
        //      width: 100,
        //      height: 50,
        //      left: 100,
        //      top: 100,
        //      label: 'test test testtesttest',
        //      fill: '#faa'
        //  });
        // handleAdd(labeledRect);
    };

    return (
        <SidebarItem onClick={handleClick}>
            <span>Button</span>
        </SidebarItem>
    );
};

export default Button;
