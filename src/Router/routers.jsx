import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import NewsDetails from "../Components/Home/News/NewsDetails";
import PrivateRoute from "../PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
