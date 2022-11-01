import React from 'react';
import Sidebar1 from '../components/Sidebar1-2-3/Sidebar1';
import Sidebar2 from '../components/Sidebar1-2-3/Sidebar2';
import SideBar3 from '../components/Sidebar1-2-3/Sidebar3';

function EmailLayout() {
  return (
    <div>
      <section className='message' >
          
        <Sidebar1/>
         <Sidebar2/> 
         <SideBar3/> 
      
      </section>
    </div>
  )
}

export default EmailLayout