import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../error-page";
import HomePage from "../pages/HomePage";
import * as loaders from "../api/loaders";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Posts, { loader as postsLoader } from "../pages/Posts";
import { AuthLayout } from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: () => {
          return null;
        },
        children: [
          {
            path: "/",
            element: (
              // <ProtectedRoute>
              <HomePage />
              // </ProtectedRoute>
            ),
            loader: loaders.checkLoggedStates,
          },
          {
            path: "/signup",
            element: <SignUp />,
            // loader: loaders.getAllPostData,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/posts",
            element: <Posts />,
            loader: postsLoader,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
