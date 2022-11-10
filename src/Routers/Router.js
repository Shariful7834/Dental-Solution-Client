import { createBrowserRouter } from "react-router-dom";
import Update from "../components/Update";
import PrivateRouter from "../Routers/PrivateRouter";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsService from "../pages/Home/Services/DetailsService/DetailsService";
import MyReview from "../pages/Home/Services/DetailsService/MyReview";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import AllServices from "../pages/Home/Services/AllServices";
import Blogs from "../pages/Home/Blogs/Blogs";

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
        path: "/allServices",
        loader: () => fetch("http://localhost:5000/allservices"),
        element: <AllServices></AllServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRouter>
            <MyReview></MyReview>
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myreviews/${params.id}`),
        element: <Update></Update>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
