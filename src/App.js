import Navbar from "./component/Navbar";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact"
import Error from "./component/Error"
import Service from "./component/Service";
import { createBrowserRouter,Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu"

function App() {
  return (
    <div className="relative ">
      <Navbar />
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
      path: "/about",
      element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/service",
        element :<Service/>,
      },
      {
        path:"/restaurant/:resid",
        element: <RestaurantMenu/>
      },

    ],
    errorElement:<Error/>
  },
]);

export default App;
