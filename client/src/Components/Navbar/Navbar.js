import React from 'react';
import { Link } from 'react-router-dom';

//распишем все линки на страницы, пока только на рут

function Navbar(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
      <div>
        <Link to="/District">District</Link>
      </div>
      <div>
        <Link to="/login"> Sign in</Link>
      </div>
    </div>
  );
}

export default Navbar;
