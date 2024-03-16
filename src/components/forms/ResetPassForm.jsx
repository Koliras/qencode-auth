import './form.css';

export default function ResetPassForm() {
  return (
    <div className="formContainer">
      <h2 className="formHeading">Create new Password?</h2>
      <form className='form'>
        <label htmlFor='password' className='label'>
          Password
        </label>
        <input
          type="password"
          required
          minLength={8}
          placeholder="Password"
          className="input mb24"
          id='password'
        />

        <label htmlFor='repeat' className='label'>
          Confirm password
        </label>
        <input
          type="password"
          required
          minLength={8}
          placeholder="Password"
          className="input mb24"
          id='repeat'
        />

        <button type="submit" className="submitButton">Reset Password</button>
      </form>
    </div>
  )
}
