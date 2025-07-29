import { createBrowserRouter, RouterProvider } from "react-router";

import NotFound from "./ui/NotFound";
import Home from "./ui/Home";

import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/menu";
import { loader as loaderMenu } from "./features/menu/menu";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: loaderMenu },
      {
        path: "menu",
        element: <Menu />,
        errorElement: <NotFound />,
        loader: loaderMenu,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
