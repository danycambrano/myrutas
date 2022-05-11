import React from 'react';

import Menu from '../components/inicio/Menu';
import Footer from '../components/inicio/Footer';
function Layout({children}) {
  return (
    <div className='container-fluid p-2'>
      <div className='section'><Menu/></div>
      <div className='section'>{children}</div>
      <div className='section'><Footer/></div>
    </div>
  )
}

export default Layout