import React from 'react';
import {Link} from 'react-router-dom'

//распишем все линки на страницы, пока только на рут

function Navbar(props) {
  return <div>
    <Link to='/'>Home</Link>
  </div>;
}

export default Navbar;
