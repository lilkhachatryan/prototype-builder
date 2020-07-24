import React from 'react';
import Rect from "./tools/Rect";

class SideNav extends React.Component{
   render() {
       return (
           <div>
               <Rect handleAdd={this.props.handleAdd} />
           </div>
       );
   }
}

export default SideNav;
