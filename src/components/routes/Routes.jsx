import { createBrowserRouter } from "react-router";
import App from "../../App";
import Login from "../forms/login/Login";
import Register from "../forms/register/Register";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
