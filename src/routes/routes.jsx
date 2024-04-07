import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
    ]
  },
 
]);

export default router;
