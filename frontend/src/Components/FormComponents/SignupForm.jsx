function SignupForm({
  formData,
  handleChange,
  handleSubmit,
  isValidated,
  handleVerification,
  handleSendOTP,
  isSent,
}) {
  return (
    <div className="signup-container">
      <h1>Sign Up Your ID</h1>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <div className="name">
            <input
              type="text"
              id="first-name"
              name="f_name"
              placeholder="First Name"
              value={formData.f_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="last-name"
              name="l_name"
              placeholder="Last Name"
              value={formData.l_name}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            id="sphone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="passwords">
            <input
              type="password"
              id="spassword"
              name="password"
              placeholder="Create a New Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="sconfirm-password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="email-otp">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <button
              className="send-otp-btn"
              type="button"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </div>

          {isSent && (
            <div className="email-otp"> 
              <input
                type="number"
                id="otp"
                name="otp"
                placeholder="Enter Verification Code Sent to your Email-ID"
                value={formData.otp}
                onChange={handleChange}
              />
              <button  className="send-otp-btn" onClick={handleVerification}>
                Verify-Email
              </button>
            </div>
          )}
        </div>
        <div className="info">
          <button className="signup-btn" type="submit" disabled={!isValidated}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
