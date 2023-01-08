import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Vote from "./pages/Vote";
import Register from "./pages/Register";
import Manage from "./pages/Manage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Vote />,
  },
  {
    path: "/admin",
    element: <Register />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
