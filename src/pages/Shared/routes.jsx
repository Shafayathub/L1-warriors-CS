import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Service from "../Service/Service";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
        path: '/service',
        element:<Service></Service>,
      }
  
  ]);

  export default router