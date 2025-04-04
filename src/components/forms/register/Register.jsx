import React from "react";

const Register = () => {
  return (
    <>
      <h1>Register Here</h1>
      <form action="">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="">Password</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
