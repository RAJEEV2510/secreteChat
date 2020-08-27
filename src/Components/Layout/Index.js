import React from 'react';
import Header from './Header/Index';
const Layout = (props) => {
return(
  <div>
 
     <Header></Header>
      {props.children}




  </div>
)
}

export default Layout;