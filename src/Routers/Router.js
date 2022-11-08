import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsService from "../pages/Home/Services/DetailsService/DetailsService";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detailsService/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <DetailsService></DetailsService>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
