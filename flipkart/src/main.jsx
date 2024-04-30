import React from "react";
import ReactDOM from "react-dom/client";

// my
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import ShowProduct from "./pages/ShowProduct.jsx";
import Shop from "./pages/Shop.jsx";

import "./index.css";

// icons
import { GlobalContextProvider } from "./context/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/show-product/:id",
        element: <ShowProduct />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404>404</NotFound404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
