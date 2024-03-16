import './form.css';
import GoogleLogo from '../../assets/GoogleLogo.svg'
import GithubLogo from '../../assets/GithubLogo.svg'
import { Link } from 'react-router-dom'

export default function LogInForm() {
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

      <form className='form'>
        <input
          type="email"
          required
          className='input mb24'
          placeholder='Work email'
        />

        <input
          type="password"
          required
          className='input mb16'
          minLength={8}
          placeholder='Password'
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
