import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App';
import '../App.css';

const Component3 = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('https://cab-backend-production.up.railway.app/bookings')
      .then(response => {
        setBookings(response.data); // Assuming the data is an array of objects
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <h1>Booking History</h1>
        <hr></hr>
        <br></br>
      <div className="table-container">
      <div className="scrollable-table">
      <table className="modern-table">
        <thead>
          <tr>
            <th>booking id</th>
            <th>email</th>
            <th>cab_type</th>
            <th>source</th>
            <th>destination</th>
            <th>booking time</th>
            <th>Ride completion time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index) => (
            <React.Fragment key={booking.id}>
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.email}</td>
              <td>{booking.cab_type}</td>
              <td>{booking.source}</td>
              <td>{booking.destination}</td>
              <td>{new Date(booking.booking_time).toLocaleString()}</td>
              <td>{new Date(booking.booking_completed).toLocaleString()}</td>
            </tr>
            {index !== bookings.length - 1 && <tr className="spacer-row"></tr>}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default Component3;
