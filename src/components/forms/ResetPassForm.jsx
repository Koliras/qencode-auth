
export default function ResetPassForm() {
  return (
    <form>
      <label>
        Password
        <input type="password" required minLength={8}/>
      </label>

      <label>
        Confirm password
        <input type="password" required minLength={8}/>
      </label>

      <button type="submit" className="submitButton">Reset Password</button>
    </form>
  )
}
