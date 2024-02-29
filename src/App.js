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
import appStore from "./App-Store/appStore";
import { Provider } from "react-redux";
import MenuCart from "./component/MenuCart";
import Card1 from "./component/Card1";

const Grocery = lazy(()=>import ("./component/Grocery"))
function App() {
  const [userName,setUserName] = useState();

  useEffect(()=>{
const data = {
  name:"abhishek"
}
console.log(data.name);
setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{logedInUser:userName ,setUserName}}>
    <div className="relative ">
      <Navbar />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
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
      {
        path:"/cart",
        element:<MenuCart/>
      },
      {
        path:"/cart1",
        element: <Card1/>
      }

    ],
    errorElement:<Error/>
  },
]);

export default App;
