import React from "react";

const Login = () => {
  return (
    <section>
      <h1>Log In</h1>
      <form action="">
        <label htmlFor="">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Log In</button>
      </form>
    </section>
  );
};

export default Login;
