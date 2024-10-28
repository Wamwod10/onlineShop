import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/home.scss'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Basket from './pages/Basket';
import Favorite from './pages/Favorite';
import SingleProduct from './pages/SingleProduct';
import { Provider } from 'react-redux'
import store from './app/store';
import "./sass/home.scss"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/:id",
        element: <SingleProduct />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
