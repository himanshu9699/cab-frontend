import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


// function App() {
  // var [cabType, setcabType] = useState('');
  // var [email, setemail] = useState('');
  // var [source, setSource] = useState('');
  // var [destination, setDestination] = useState('');
  // var [result, setResult] = useState({});

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     var response = await axios.post('https://cab-backend-1.onrender.com/calculate', {
  //       source,
  //       destination,
  //       cabType,
  //       email
  //     });
  //     setResult(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  function App(){
  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
    //   {/* <h1>Cab System</h1>
    //   <form onSubmit={handleSubmit}>
    //   <label>
    //       Email:
    //       <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
    //     </label>
    //     <label>
    //       CabType:
    //       <input type="text" value={cabType} onChange={(e) => setcabType(e.target.value)} />
    //     </label>
    //     <label>
    //       Source:
    //       <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
    //     </label>
    //     <br />
    //     <label>
    //       Destination:
    //       <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
    //     </label>
    //     <br />
    //     <button type="submit">Calculate</button>
    //   </form>
    //   {result.shortestTime && (
    //     <div>
    //       <h2>Result:</h2>
    //       <p>Shortest Time: {result.shortestTime} minutes</p>
    //       <p>Estimated Cost: ${result.estimatedCost}</p>
    //     </div>
    //   )}
    // </div> */}
  );
  }

export default App;
