import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import * as loaders from "./loaders.js";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: loaders.getAllPostData,
      },
      {
        path: "/signup",
        element: <SignUp />,
        // loader: loaders.getAllPostData,
      },
      {
        path: "/login",
        element: <Login />,
        // loader: loaders.getAllPostData,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
