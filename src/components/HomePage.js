import React,{useState}  from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import '../App.css'
import emailjs from '@emailjs/browser';

const Result = () =>{
  return (
    <p> Sucessfull!</p>
  )
}

const HomePage = () => { 
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const[result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtwd3g8', 'template_suqzrwk', e.target, 'aShkbk3tf2laAsna0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true)
  };

  setTimeout(()=>{
      setResult(false)
  },6000)

 

    function emailChangedHandler(e){
        setEnteredEmail(e.target.value)
        
    }

    function passwordChangedHandler(e){
        setEnteredPassword(e.target.value)
    }

  return (
    <div className='Homepage'>
      <h1 id='login-header'>Welcome</h1>
      <Link to="/signup" ><button className='signup-btn'>Go to Signup</button></Link> 

      <form className='form' onSubmit={sendEmail} >
          <div>
              <input required type="email" name="email" id="email" value={enteredEmail} placeholder='Enter Email here ....' onChange={emailChangedHandler}/>
          </div>
          <div>
              <input required type="password" name="password" id="password" value={enteredPassword} placeholder="Enter Password here ...." onChange={passwordChangedHandler}/>
          </div>
          <div className="login-container">
              <button className="login-btn">Login</button>
          </div>
          <div className='result' >
              {result ? <Result/> : null}
           </div>
        </form>
    </div>
  )
}

export default HomePage