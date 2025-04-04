import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router";
import Login from "./components/forms/login/Login";

const App = () => {
  return (
    <section>
      <article>
        <Navbar />
      </article>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default App;
