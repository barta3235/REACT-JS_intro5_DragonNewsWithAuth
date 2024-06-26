import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/newsdetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
          {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('news.json')
          },
          {
             path: '/news/:id',
             element:<PrivateRoute>
                <NewsDetails></NewsDetails>
             </PrivateRoute>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path:'/register',
            element: <Register></Register>
          }

      ]
    },
  ]);

  export default router;