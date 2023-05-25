import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import * as loaders from "./loaders.js";
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
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
