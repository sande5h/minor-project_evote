import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Fetch from "./pages/Fetch";
import Vote from "./pages/Vote";
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Fetch />,
    errorElement: <Navbar />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Navbar />,
  },
  {
    path: "/vote",
    element: <Vote />,
    errorElement: <Navbar />,
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
