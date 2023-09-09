import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AllBooks from "../pages/AllBooks";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/book/:id',
        element:<SingleBook/>
      },
      {
        path: '/login',
        element:<LogIn/>
      },
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/allbook',
        element:<AllBooks/>
      }
    ]
  }
])