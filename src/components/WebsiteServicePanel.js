import React, { useEffect } from 'react';
import Panels from './Panels';
import './Panels.css';


function WebsiteServicePanel() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
      <>
      <h1 className='website-services'>SERVICES</h1>
      <Panels 
        panelHeader='Digital Media'
        panelTextOne='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        panelTextTwo=''  
      />
      <Panels 
        panelHeader='Website Services'
        panelTextOne='Whether you are in need of a professional website or you have an existing one
        that needs an overhaul we can make it happen.'
        panelTextTwo='Whether you are in need of a professional website or you have an existing one
        that needs an overhaul we can make it happen.'  
      />
      </>
  );
}

export default WebsiteServicePanel;
