

function LoginForm({ formData, handleChange, handleSubmit,forgotPassword,handleSignupRedir }) {
  return (
    <div className="Login-container">
      <h1>Login Your Account reflect</h1>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <input
            type="tel"
            id="phone-number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p onClick={forgotPassword}> forgot Password ? </p>
        
          <button type="submit">LOGIN </button>
          <button type="button" onClick={handleSignupRedir}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
