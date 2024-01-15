import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Chekout from "./pages/Chekout";
import Material from "./pages/Material";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Login from "./pages/Login";
// components
import Loading from "./components/Loading";
import Materials from "./components/Materials";
import { useEffect } from "react";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/chekout",
          element: <Chekout />,
        },
        {
          path: "/materials",
          element: <Materials />,
        },
        {
          path: "/material/:id",
          element: <Material />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="font-inter">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
