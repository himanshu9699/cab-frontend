import React, { useState,useRef } from 'react';
import axios from 'axios';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';


function Component1() {
    var [cabType, setcabType] = useState('');
    var [email, setEmail] = useState('');
    var [source, setSource] = useState('');
    var [destination, setDestination] = useState('');
    var [result, setResult] = useState({});
    var [emailError, setEmailError] = useState('');
    var form = useRef();


    const sendEmail = (e) => {
      console.log('email');
      // e.preventDefault();
      var formData = new FormData(form.current); // Changed from 'form' to 'form.current'
      var userEmail=formData.get('email');
      console.log(userEmail); // Add the email address to the form data
  
      emailjs
        .sendForm('service_64sin2j', 'template_ut9p447', form.current,'SqbI-GnOyMnrcg2il')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          // console.log(form.email);
          console.error('Failed to send email:', error.text);
      });
    };

  
    const handleSubmit = async (e) => {
      console.log("yes");
      e.preventDefault();
      if (!email || !validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        return;
      }
      setEmailError('');
      try {
        var response = await axios.post('https://cab-backend-production.up.railway.app/calculate', {
          source,
          destination,
          cabType,
          email
        }
        );
        setResult(response.data);
        var responseData = response.data;
        console.log(responseData.shortestTime)
        // sendEmail();
        if (responseData.shortestTime) {
           console.log("himanshu")
          sendEmail(); 
       }
          setcabType('');
          setEmail('');
          setSource('');
          setDestination('');
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  };
  
    return (
      <div>
          {/* <Sidebar/> */}
        <h1>Cab System</h1>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <form ref={form} onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br></br>
          <label>
            Cab Number:
            <select value={cabType} onChange={(e) => setcabType(e.target.value)}>
                        <option value="">Select Cab Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
            </select>
          </label>
          <br></br>
          <label>
            Source:
            <select value={source} onChange={(e) => setSource(e.target.value)}>
                        <option value="">Select Source</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
          </label>
          <br />
          <label>
            Destination:
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                        <option value="">Select Destination</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
          </label>
          <br />
          <button type="submit">Calculate</button>
        </form>
        {/* {
          if(result)
          {

          }
        } */}
        {/* {console.log(result.shortestTime)}
        {console.log(result.a)} */}
        {result.shortestTime && (
          <div>
            <h2>Result:</h2>
            <p>Shortest Time: {result.shortestTime} minutes</p>
            <p>Estimated Cost: ${result.estimatedCost}</p>
          </div>
          ) 
          // sendEmail()
          }
        {
          result.a &&
              <p>Cab already booked</p>
        }
        {/* {result.a ? <p>Cabs already booked</p> : null} */}
      </div>
    );
  }
export default Component1;