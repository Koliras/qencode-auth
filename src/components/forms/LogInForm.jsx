import GoogleLogo from '../../assets/GoogleLogo.svg'
import GithubLogo from '../../assets/GithubLogo.svg'
import { Link } from 'react-router-dom'

export default function LogInForm() {
  return (
    <>
      <h2 className="formHeading">Log in to your account</h2>
      <div className="oauth">
        <button className="oauthButton">
          <img src={GoogleLogo} className="oauthIcon"/>
          Google
        </button>

        <button className="oauthButton">
          <img src={GithubLogo} className="oauthIcon"/>
          Github
        </button>
      </div>

      <span className='devider'>Or</span>

      <form>
        <input type="email" required className='input'/>

        <input type="text" required minLength={8} className='input'/>

        <Link to='/forgot-pass'>Forgot your password?</Link>

        <button type='submit' className='submitButton'>
          Log in to Qencode
        </button>
        
        <p>
          Is your company new to Qencode? <Link to='/'>Sign up</Link>
        </p>
      </form>
    </>
  )
}
