import './form.css';

export default function ResetPassForm() {
  return (
    <div className="formContainer">
      <h2 className="formHeading">Create new Password?</h2>
      <form className='form'>
        <label>
          Password
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            className="input mb24"
          />
        </label>

        <label>
          Confirm password
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            className="input mb24"
          />
        </label>

        <button type="submit" className="submitButton">Reset Password</button>
      </form>
    </div>
  )
}
