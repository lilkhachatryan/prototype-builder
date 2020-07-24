import React from 'react';
import Rect from "./tools/Rect";
import TextBox from "./tools/TextBox";
import Divider from "./tools/Divider";
import AddImageURL from "./tools/AddImageURL";

class SidebarContainer extends React.Component{
   render() {
       const {handleAdd} = this.props;
       return (
           <div>
               <Rect handleAdd={handleAdd} />
               <TextBox handleAdd={handleAdd} />
               <Divider handleAdd={handleAdd} />
               <AddImageURL handleAdd={handleAdd}/>
           </div>
       );
   }
}

export default SidebarContainer;
