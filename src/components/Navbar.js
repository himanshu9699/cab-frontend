import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'lightgray', padding: '3px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <div style={{ border: '1px solid black', padding: '10px 15px', borderRadius: '5px' }}>
          Profile
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
