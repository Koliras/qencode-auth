import './form.css';
import GoogleLogo from '../../assets/GoogleLogo.svg'
import GithubLogo from '../../assets/GithubLogo.svg'
import { Link } from 'react-router-dom'
import { AuthAxios } from '../../utils/AuthAxios';
import { useState } from 'react';

export default function LogInForm() {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);
    try {
      const { data } = await AuthAxios.post("/login", {
        email: email, 
        password: pass,
      });
      AuthAxios.interceptors.request.use(
        config => {
          if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${data.refresh_token}`;
          }
          return config;
        },
        error => {
          Promise.reject(error);
        }
      )
    } catch {
      setHasError(true);
    }

  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setHasError(false);
  }

  const handlePassChange = (event) => {
    setPass(event.target.value);
    setHasError(false);
  }

  return (
    <div className='formContainer'>
      <h2 className="formHeading">Log in to your account</h2>
      {hasError && <div className='error'>Sorry, could not log in</div>}
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
