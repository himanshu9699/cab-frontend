import React, { useState } from 'react';
import Component1 from './Component1';
// import Component2 from './component2';
import Component3 from './Component3';
import Component4 from './component4';

const Sidebar = () => {
  const [selectedComponent, setSelectedComponent] = useState('Component1');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <Component1 />;
      // case 'Component2':
      //   return <Component2 />;
      case 'Component3':
        return <Component3 />;
      case 'Component4':
        return <Component4 />;
      default:
        return <Component1 />;
    }
  };

  return (
    <div style={{ display: 'flex',height:'1000px' }}>
      <div style={{ width: '200px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li onClick={() => setSelectedComponent('Component1')} style={{ cursor: 'pointer',padding:'20px' }}>Dashboard</li>
          {/* <li onClick={() => setSelectedComponent('Component2')} style={{ cursor: 'pointer' ,padding:'20px'}}>Create Ride</li> */}
          <li onClick={() => setSelectedComponent('Component3')} style={{ cursor: 'pointer' ,padding:'20px'}}>History Bookings</li>
          <li onClick={() => setSelectedComponent('Component4')} style={{ cursor: 'pointer',padding:'20px' }}>Change price of cabs</li>
        </ul>
      </div>
      <div style={{ flex: 1,padding:'50px' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Sidebar;
