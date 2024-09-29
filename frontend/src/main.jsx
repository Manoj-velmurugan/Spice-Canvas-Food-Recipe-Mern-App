import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/search.jsx';
import SingleProduct from './pages/products/SingleProduct.jsx';
import Recipes from './pages/products/Recipes.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories/:category",
        element: <CategoryPage></CategoryPage>
      },
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/items/:id",
        element: <SingleProduct></SingleProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/api/items/${params.id}`)
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
      path: "/contact",
      element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
