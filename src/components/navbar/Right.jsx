import React, { useState } from "react";
import { NavLink } from "react-router";

const Right = () => {
  let [state, setState] = useState(false);
  let login = () => {
    return (
      <>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </>
    );
  };

  let logout = () => {
    return (
      <>
        <li>
          <button>Logout</button>
        </li>
      </>
    );
  };

  return <ul>{state ? logout() : login()}</ul>;
};

export default Right;
