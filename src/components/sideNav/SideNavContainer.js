import React from 'react';
import Rect from "./tools/Rect";

class SideNavContainer extends React.Component{
   render() {
       return (
           <div>
               <Rect handleAdd={this.props.handleAdd} />
           </div>
       );
   }
}

export default SideNavContainer;
