import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import Aboutus from "./components/Aboutus.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Carrer from "./components/Carrer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CallMe from "./components/CallMe.jsx";
import Dynamic from "./dynamicRoute/Dynamic.jsx";
import Details from "./components/pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
        children: [
          {
            path: "callme",
            element: <CallMe />,
          },
          {
            path: "dynamic",
            element: <Dynamic />,
          },
        ],
      },
      {
        path: "dynamic/details/:id",
        element: <Details />,
      },
      {
        path: "carrer",
        element: <Carrer />,
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <App />
  <RouterProvider router={router} />
  /* </React.StrictMode>, */
);
