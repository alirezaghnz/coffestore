import { createBrowserRouter, RouterProvider } from "react-router";

import NotFound from "./ui/NotFound";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
