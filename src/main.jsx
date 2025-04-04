import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router";
import router from "./components/routes/Routes";
import App from "./App";
import "../global.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
