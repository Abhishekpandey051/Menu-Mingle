import Navbar from "./component/Navbar";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact"
import Error from "./component/Error"
import Service from "./component/Service";
import { createBrowserRouter,Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu"
import { lazy , useState , useEffect} from "react";
import userContext from "./utility/UserContext";

const Grocery = lazy(()=>import ("./component/Grocery"))
function App() {
  const [userName,setUserName] = useState();

  useEffect(()=>{
const data = {
  name:"Abhishek Pandey"
}
setUserName(data.name)
  },[])
  return (
    <userContext.Provider value={{logedInUser:userName ,setUserName}}>
    <div className="relative ">
      <Navbar />
      <Outlet />
    </div>
    </userContext.Provider>
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
      {
        path:"/grocery",
        element:<Grocery/>
      },

    ],
    errorElement:<Error/>
  },
]);

export default App;
