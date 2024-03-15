import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CabPrices() {
  const [cabPrices, setCabPrices] = useState({});
  const [newPrices, setNewPrices] = useState({});
  
  useEffect(() => {
    // Fetch initial cab prices from the server
    axios.get('http://localhost:5000/cab-prices')
      .then(response => {
        setCabPrices(response.data);
      })
      .catch(error => {
        console.error('Error fetching cab prices:', error);
      });
  }, []);

  const handleChange = (e, cabNumber) => {
    const { value } = e.target;
    setNewPrices(prevPrices => ({
      ...prevPrices,
      [cabNumber]: parseInt(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send new prices to the server to update
    axios.post('https://cab-backend-1.onrender.com/update-cab-prices', newPrices)
      .then(() => {
        // Reset newPrices state and fetch updated cab prices
        setNewPrices({});
        return axios.get('https://cab-backend-1.onrender.com/cab-prices');
      })
      .then(response => {
        setCabPrices(response.data);
      })
      .catch(error => {
        console.error('Error updating cab prices:', error);
      });
  };

  return (
    <div>
      <h2>Old Cab Prices</h2>
      <ul>
        {Object.keys(cabPrices).map(cabNumber => (
          <li key={cabNumber}>Cab {cabNumber}: ${cabPrices[cabNumber]}</li>
        ))}
      </ul>
      <h2>Update Cab Prices</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(cabPrices).map(cabNumber => (
          <div key={cabNumber}>
            <label>
              Cab {cabNumber}: 
              <input
                type="number"
                value={newPrices[cabNumber] || ''}
                onChange={(e) => handleChange(e, cabNumber)}
              />
            </label>
          </div>
        ))}
        <button type="submit">Update Prices</button>
      </form>
    </div>
  );
}

export default CabPrices;
