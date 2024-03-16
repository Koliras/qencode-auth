import './form.css';

export default function ForgotPassForm() {
  return (
    <div className="formContainer">
      <h2 className="formHeading">Forgot Password?</h2>
      <form className="form">
        <input
          type="email"
          required
          className="input mb24"
          placeholder="Enter your email"
        />
        <button type="submit" className="submitButton mb20">Send</button>
      </form>
      <button className="cancelButton">Cancel</button>
    </div>
  )
}
