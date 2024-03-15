
export default function ResetPassForm() {
  return (
    <div className="formContainer">
      <h2 className="formHeading">Create new Password?</h2>
      <form>
        <label>
          Password
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            className="input"
          />
        </label>

        <label>
          Confirm password
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            className="input"
          />
        </label>

        <button type="submit" className="submitButton">Reset Password</button>
      </form>
    </div>
  )
}
