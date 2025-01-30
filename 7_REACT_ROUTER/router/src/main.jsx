import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";

// 2 - pagina de erro
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

//3 - componente base
import Home from "./routes/Home.jsx";

// 7 - Rota dinâmica
import Product from "./routes/Product.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      // 7 - rota dinâmica
      {
        path: "/products/:id",
        element: <Product />,
      },

      // 8 - nested route
      {
        path: "/products/:id/info",
        element: <Info />,
      },

      // 9 - search
      {
        path: "/search",
        element: <Search />,
      },

      // 9 - search
      {
        path: "/test",
        element: <Navigate to="/"/>,
      },
    ],
  },
  //{
  //  path: "/contact",
  //  element: <Contact />,
  //},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
