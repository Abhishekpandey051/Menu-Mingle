import Navbar from "./component/Navbar";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact"
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="relative ">
      <Navbar />
      <Body />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
  path: "/about",
  element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>
  }
]);

export default App;
