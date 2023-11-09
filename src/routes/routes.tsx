import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Destination from "../pages/Destination";
import NotFound from "../pages/NotFound";
export const routes = createBrowserRouter([
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
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
