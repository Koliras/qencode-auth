import './form.css';
import GoogleLogo from '../../assets/GoogleLogo.svg'
import GithubLogo from '../../assets/GithubLogo.svg'
import { Link } from 'react-router-dom'
import { AuthAxios } from '../../utils/AuthAxios';
import { useState } from 'react';

export default function LogInForm() {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await AuthAxios.post("/login", {
      email: email, 
      password: pass,
    });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePassChange = (event) => {
    setPass(event.target.value);
  }
  return (
    <div className='formContainer'>
      <h2 className="formHeading">Log in to your account</h2>
      <div className="oauth mb30">
        <button className="oauthButton">
          <img src={GoogleLogo} className="oauthIcon"/>
          Google
        </button>

        <button className="oauthButton">
          <img src={GithubLogo} className="oauthIcon"/>
          Github
        </button>
      </div>

      <span className='devider mb30'>Or</span>

      <form className='form' onSubmit={handleSubmit}>
        <input
          type="email"
          required
          className='input mb24'
          placeholder='Work email'
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          required
          className='input mb16'
          minLength={8}
          placeholder='Password'
          value={pass}
          onChange={handlePassChange}
        />

        <Link to='/forgot-pass' className='forgotPass mb30'>
          Forgot your password?
        </Link>

        <button type='submit' className='submitButton mb20'>
          Log in to Qencode
        </button>
        
        <p className='underlyingText'>
          Is your company new to Qencode? <Link to='/'>Sign up</Link>
        </p>
      </form>
    </div>
  )
}
