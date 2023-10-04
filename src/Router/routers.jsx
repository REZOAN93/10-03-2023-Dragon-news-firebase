import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Login from "../Components/Authentication/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);