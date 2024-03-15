import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'lightgray', padding: '0px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>SpeedyCab</h2>
      </div>
      <div>
        {/* <div style={{ border: '1px solid black', padding: '10px 15px', borderRadius: '5px' }}> */}
           <button><div style={{ padding: '10px 15px', borderRadius: '5px' ,top: '5px'}}>Profile</div></button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
