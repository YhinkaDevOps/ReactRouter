import { Link } from "react-router-dom";
import React,{useState}  from 'react'
import '../App.css'

const SignupPage = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function emailChangedHandler(e){
        setEnteredEmail(e.target.value)
    }

    function passwordChangedHandler(e){
        setEnteredPassword(e.target.value)
    }

  return (
    <div className="form-container">
        <Link to="/"><button className="homepage-btn">GO TO HOME PAGE</button></Link>
       
      <form className='form' onSubmit='' >
          <div>
              <input required type="email" name="" id="email" value={enteredEmail} placeholder='Enter Email here ....' onChange={emailChangedHandler}/>
          </div>
          <div>
              <input required type="password" name="" id="password" value={enteredPassword} placeholder="Enter Password here ...." onChange={passwordChangedHandler}/>
          </div>
          <div className="login-container">
              <button className="login-btn">Login</button>
          </div>

        </form>
    </div>
  )
}

export default SignupPage
