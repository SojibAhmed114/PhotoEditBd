import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './Pages/contact/Contact.jsx';
import Services from './Pages/services/Services.jsx';
import Home from './Pages/home/Home.jsx';
import Location from './Pages/location/Location.jsx';
import About from './Pages/about/About.jsx';
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/location",
        element: <Location/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={3000} />
    <RouterProvider router={router} />
  </StrictMode>
);
