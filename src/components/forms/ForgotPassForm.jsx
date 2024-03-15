export default function ForgotPassForm() {
  return (
    <>
      <h2 className="formHeading">Forgot Password?</h2>
      <form>
        <input type="email" required className="input"/>
        <button type="submit" className="submitButton">Send</button>
      </form>
      <button className="cancelButton">Cancel</button>
    </>
  )
}
